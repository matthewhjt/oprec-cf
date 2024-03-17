import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DivisiService } from './divisi.service';
import { Prisma } from '@prisma/client';

@Controller('divisi')
export class DivisiController {
  constructor(private readonly divisiService: DivisiService) {}

  @Post()
  create(@Body() createDivisiDto: Prisma.DivisiCreateInput) {
    return this.divisiService.create(createDivisiDto);
  }

  @Get()
  findAll() {
    return this.divisiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.divisiService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDivisiDto: Prisma.DivisiUpdateInput) {
    return this.divisiService.update(id, updateDivisiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.divisiService.remove(id);
  }
}
