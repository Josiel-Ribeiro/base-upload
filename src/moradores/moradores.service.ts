import { Injectable } from '@nestjs/common';
import { CreateMoradoreDto } from './dto/create-moradore.dto';
import { UpdateMoradoreDto } from './dto/update-moradore.dto';

@Injectable()
export class MoradoresService {
  create(createMoradoreDto: CreateMoradoreDto) {
    return 'This action adds a new moradore';
  }

  findAll() {
    return `This action returns all moradores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moradore`;
  }

  update(id: number, updateMoradoreDto: UpdateMoradoreDto) {
    return `This action updates a #${id} moradore`;
  }

  remove(id: number) {
    return `This action removes a #${id} moradore`;
  }
}
