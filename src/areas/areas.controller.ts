import { Body, Controller, Get, Post } from '@nestjs/common';
import { AreasService } from './areas.service';
import { Area } from './area.entity';

@Controller('areas')
export class AreasController {
  constructor(private readonly service: AreasService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() reqBody: Area) {
    return this.service.save(reqBody);
  }
}
