import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
import { UsersService } from 'src/users/users.service';
import { Logger } from 'src/logger/logger.service';

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
    this.logger.warn('Location is being saved');
    const user = await this.usersService.findOne(location.userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.usersRepository.save(location);
  }
}
