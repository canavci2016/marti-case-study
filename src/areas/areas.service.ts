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
}
