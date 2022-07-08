import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pill } from './entities/pill.entity';
import { PillsController } from './pills.controller';
import { PillsService } from './pills.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pill])],
  controllers: [PillsController],
  providers: [PillsService]
})
export class PillsModule {}
