import { Controller, Get } from '@nestjs/common';
import { Logger } from './logger.service';

@Controller('logs')
export class LogsController {
  constructor(private readonly service: Logger) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
