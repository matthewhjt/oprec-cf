import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubdivisiService } from './subdivisi.service';
import { CreateContactLineDTO, CreateContactWADTO, CreateSubdivisiDTO, CreateSubdivisiHRDTO, UpdateContactLineDTO, UpdateContactWADTO, UpdateSubdivisiDTO, UpdateSubdivisiHRDTO } from './dto/subdivisi.dto';

@Controller('subdivisi')
export class SubdivisiController {
  constructor(private readonly subdivisiService: SubdivisiService) {}

  @Post()
  create(@Body() createSubdivisiDto: CreateSubdivisiDTO) {
    return this.subdivisiService.create(createSubdivisiDto);
  }

  @Get()
  findAll() {
    return this.subdivisiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subdivisiService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubdivisiDto: UpdateSubdivisiDTO) {
    return this.subdivisiService.update(id, updateSubdivisiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subdivisiService.delete(id);
  }

  @Post('hr')
  createHR(@Body() createHRDto: CreateSubdivisiHRDTO) {
    return this.subdivisiService.createHR(createHRDto);
  }

  @Patch('hr/:id')
  updateHR(
    @Param('id') id: string,
    @Body() updateHRDto: UpdateSubdivisiHRDTO,
  ) {
    return this.subdivisiService.updateHR(id, updateHRDto); 
  }

  @Delete('hr/:id')
  deleteHR(@Param('id') id: string) {
    return this.subdivisiService.deleteHR(id);
  }

  @Post('hr/:id/contact/WA')
  createContactHRWA(
    @Param('id') id: string,
    @Body() createContactWAHRDto: CreateContactWADTO,
  ) {
    return this.subdivisiService.createContactWA(id, createContactWAHRDto)
  }

  @Patch('hr/:id/contact/WA')
  editContactHRWA(
    @Param('id') id: string,
    @Body() updateContactWAHRDto: UpdateContactWADTO,
  ) {
    return this.subdivisiService.updateContactWA(id, updateContactWAHRDto)
  }

  @Post('hr/:id/contact/Line')
  createContactHRLine(
    @Param('id') id: string,
    @Body() createContactLineHRDto: CreateContactLineDTO,
  ) {
    return this.subdivisiService.createContactLine(id, createContactLineHRDto)
  }

  @Patch('hr/:id/contact/Line')
  editContactHRLine(
    @Param('id') id: string,
    @Body() updateContactLineHRDto: UpdateContactLineDTO,
  ) {
    return this.subdivisiService.updateContactLine(id, updateContactLineHRDto)
  }
}
