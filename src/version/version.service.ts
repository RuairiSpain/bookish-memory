/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateVersionInput } from './dto/create-version.input';
import { UpdateVersionInput } from './dto/update-version.input';

@Injectable()
export class VersionService {
  create(createVersionInput: CreateVersionInput) {
    return 'This action adds a new version';
  }

  findAll() {
    return `This action returns all version`;
  }

  findOne(id: string) {
    return `This action returns a #${id} version`;
  }

  update(id: string, updateVersionInput: UpdateVersionInput) {
    return `This action updates a #${id} version`;
  }

  remove(id: string) {
    return `This action removes a #${id} version`;
  }
}
