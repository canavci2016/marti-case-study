import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { Location } from './location.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Location]), UsersModule],
  providers: [LocationsService],
  controllers: [LocationsController],
})
export class LocationsModule {}
