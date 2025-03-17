import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
import { UsersService } from 'src/users/users.service';
import { Logger } from 'src/logger/logger.service';
import { AreasService } from 'src/areas/areas.service';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private usersRepository: Repository<Location>,
    @Inject(Logger)
    private readonly logger: Logger,
  ) {
    this.logger.setContext('hello');
  }

  @Inject(UsersService)
  private readonly usersService: UsersService;

  @Inject(AreasService)
  private readonly areasService: AreasService;

  getHello(): string {
    return 'Hello World!';
  }

  findAll(): Promise<Location[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Location | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async save(location: Location): Promise<Location> {
    const user = await this.usersService.findOne(location.userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const locationRes = await this.usersRepository.save(location);
    const area = await this.areasService.checkIfLocationLiesInArea(
      locationRes.lat,
      locationRes.lng,
    );

    if (area) {
      await this.logger.log(`Location is in area ${area.name}`, {
        userId: user.id,
        locationId: locationRes.id,
      });
    }

    return locationRes;
  }
}
