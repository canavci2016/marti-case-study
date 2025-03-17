import { Module } from '@nestjs/common';
import { Logger } from './logger.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './log.entity';
import { LogsController } from './log.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Log])],
  providers: [Logger],
  exports: [Logger],
  controllers: [LogsController],
})
export class LoggerModule {}
