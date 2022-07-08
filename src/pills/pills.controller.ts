import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePillDto } from './dto/create-pill.dto';
import { PillsService } from './pills.service';

@Controller('pills')
export class PillsController {
  constructor(private readonly pillsService: PillsService) {}

  @Post()
  create(@Body() createPillDto: CreatePillDto) {
    return this.pillsService.create(createPillDto);
  }

  @Get(':key')
  findOne(@Param('key') key: string) {
    return this.pillsService.findOne(key);
  }
}
