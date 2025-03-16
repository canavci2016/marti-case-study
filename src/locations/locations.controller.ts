import { Body, Controller, Get, Post } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { Location } from './location.entity';

@Controller('locations')
export class LocationsController {
  constructor(private readonly service: LocationsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() reqBody: Location) {
    return this.service.save(reqBody);
  }
}
