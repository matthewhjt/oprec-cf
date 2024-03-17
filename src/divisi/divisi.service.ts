import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DivisiService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createDivisiDto: Prisma.DivisiCreateInput) {
    return this.databaseService.divisi.create({
      data: createDivisiDto
    })
  }

  async findAll() {
    return this.databaseService.divisi.findMany()
  }

  async findOne(id: string) {
    return this.databaseService.divisi.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: string, updateDivisiDto: Prisma.DivisiUpdateInput) {
    return this.databaseService.divisi.update({
      where: {
        id,
      },
      data: updateDivisiDto,
    })
  }

  async remove(id: string) {
    return this.databaseService.divisi.delete({
      where: {
        id,
      }
    })
  }
}
