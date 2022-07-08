import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePillDto } from './dto/create-pill.dto';
import { Pill } from './entities/pill.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PillsService {
  constructor(
    @InjectRepository(Pill)
    private readonly pillRepository: Repository<Pill>,
  ) {}

  async create(createPillDto: CreatePillDto) {
    const key = this.getUniqueKey();
    const pill = this.pillRepository.create({
      key,
      ...createPillDto,
      createTime: new Date()
    });
    await this.pillRepository.save(pill);
    return { key };
  }

  async findOne(key: string) {
    const pill = await this.pillRepository.findOne({ where: { key } });
    if (!pill) {
      throw new NotFoundException(`Pill ${key} not found`);
    }
    if (pill.openTime > new Date()) {
      return {
        type: 'close',
        name: pill.name,
        openTime: pill.openTime,
        hint: pill.hint,
      };
    }
    return {
      type: 'open',
      name: pill.name,
      content: pill.content,
      createTime: pill.createTime,
    };
  }

  getUniqueKey(): string {
    return uuidv4();
  }
}
