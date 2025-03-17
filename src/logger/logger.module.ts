import { Module } from '@nestjs/common';
import { Logger } from './logger.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Log])],
  providers: [Logger],
  exports: [Logger],
})
export class LoggerModule {}
