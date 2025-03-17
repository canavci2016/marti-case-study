import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from './area.entity';

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(Area)
    private repository: Repository<Area>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  findAll(): Promise<Area[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Area | null> {
    return this.repository.findOneBy({ id });
  }

  async save(area: Area): Promise<Area> {
    return this.repository.save(area);
  }

  async checkIfLocationLiesInArea(
    lat: number,
    lng: number,
  ): Promise<Area | null> {
    const point = { x: lat, y: lng };
    const areas = await this.repository.find();

    for (const area of areas) {
      const polygon = area.coordinates.map((coordinate) => ({
        x: coordinate.lat,
        y: coordinate.lng,
      }));
      const matches = this.point_in_polygon(point, polygon);
      if (matches) {
        return area;
      }
    }

    return null;
  }

  point_in_polygon(
    point: { x: number; y: number },
    polygon: Array<{ x: number; y: number }>,
  ): boolean {
    const num_vertices = polygon.length;
    const x = point.x;
    const y = point.y;
    let inside = false;

    let p1 = polygon[0];
    let p2: { x: number; y: number };

    for (let i = 1; i <= num_vertices; i++) {
      p2 = polygon[i % num_vertices];

      if (y > Math.min(p1.y, p2.y)) {
        if (y <= Math.max(p1.y, p2.y)) {
          if (x <= Math.max(p1.x, p2.x)) {
            const x_intersection =
              ((y - p1.y) * (p2.x - p1.x)) / (p2.y - p1.y) + p1.x;

            if (p1.x === p2.x || x <= x_intersection) {
              inside = !inside;
            }
          }
        }
      }

      p1 = p2;
    }

    return inside;
  }
}
