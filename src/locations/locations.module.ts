import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { Location } from './location.entity';
import { UsersModule } from 'src/users/users.module';
import { LoggerModule } from 'src/logger/logger.module';
import { AreasModule } from 'src/areas/areas.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Location]),
    UsersModule,
    LoggerModule,
    AreasModule,
  ],
  providers: [LocationsService],
  controllers: [LocationsController],
})
export class LocationsModule {}
