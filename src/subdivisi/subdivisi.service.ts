import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateContactLineDTO, CreateContactWADTO, CreateSubdivisiDTO, CreateSubdivisiHRDTO, UpdateContactLineDTO, UpdateContactWADTO, UpdateSubdivisiDTO, UpdateSubdivisiHRDTO } from './dto/subdivisi.dto';

@Injectable()
export class SubdivisiService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createSubdivisiDto: CreateSubdivisiDTO) {
    const divisi = await this.databaseService.divisi.findUniqueOrThrow({
      where: {
        id: createSubdivisiDto.idDivisi
      }
    })

    return this.databaseService.subdivisi.create({
      data: createSubdivisiDto
    })
  }

  async findAll() {
    return this.databaseService.subdivisi.findMany({
      include: {
        hr: {
          select: {
            contact: {
              select: {
                contactWA: {
                  select: {
                    nomor: true
                  }
                },
                contactLine: {
                  select: {
                    username: true
                  }
                }
              }
            }
          }
        }
      }
    })
  }

  async findOne(id: string) {
    return this.databaseService.subdivisi.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id:string, updateSubdivisiDto: UpdateSubdivisiDTO) {
    const subdivisi = await this.databaseService.subdivisi.findUniqueOrThrow({
      where: {
        id
      }
    })

    return this.databaseService.subdivisi.update({
      where: {
        id
      },
      data: updateSubdivisiDto,
    })
  }

  async delete(id: string) {
    return this.databaseService.subdivisi.delete({
      where: {
        id
      }
    })
  }

  async createHR(createHRDto: CreateSubdivisiHRDTO) { 
    this.databaseService.subdivisi.findUniqueOrThrow({
      where: { 
        id: createHRDto.idSubdivisi
      }
    });

    return this.databaseService.hR.create({
      data: createHRDto
    });
  }

  async updateHR(id: string, updateSubdivisiHRDto: UpdateSubdivisiHRDTO) {
    const hr = await this.databaseService.hR.findUniqueOrThrow({
      where: {
        id
      },
    });

    return this.databaseService.hR.update({
      where: { 
        id
      },
      data: updateSubdivisiHRDto,
    });
  }

  async deleteHR(id: string) {
    return this.databaseService.hR.delete({
      where: { id },
    });
  }

  async createContactWA(idHr: string, createContactWADTO: CreateContactWADTO ){
    const contactHR = await this.databaseService.contactHR.upsert({
      where: { 
        idHR: idHr 
      },
      update: {},
      create: {
        idHR: idHr,
      },
      select: { id: true }, 
    });

    return this.databaseService.contactWA.create({
      data: {
        idContact: contactHR.id,
        nomor: createContactWADTO.nomor,
      },
    });
  }

  async updateContactWA(id: string, updateContactWAHRDto: UpdateContactWADTO) {
    const contactHR = await this.databaseService.contactHR.findUniqueOrThrow({
      where: {
        idHR: id
      },
    })

    return this.databaseService.contactWA.update({
      where: {
        idContact: contactHR.id
      },
      data: {
        nomor: updateContactWAHRDto.nomor
      }
    })
  }

  async createContactLine(idHr: string, createContactLineDTO: CreateContactLineDTO ){
    const HR = this.databaseService.hR.findUniqueOrThrow({
      where: {
        id: idHr
      }
    })

    let contactHR = this.databaseService.contactHR.findUnique({
      where: {
        idHR: idHr
      }
    })

    if (!contactHR){
      contactHR = this.databaseService.contactHR.create({
        data: {
          idHR: idHr
        }
      })
    }
    
    return this.databaseService.contactLine.create({
      data: {
        idContact: (await contactHR).id,
        username: createContactLineDTO.username,
      }
    })
  }

  async updateContactLine(id: string, updateContactLineHRDto: UpdateContactLineDTO) {
    const contactHR = await this.databaseService.contactHR.findUniqueOrThrow({
      where: {
        idHR: id
      },
    })

    return this.databaseService.contactLine.update({
      where: {
        idContact: contactHR.id
      },
      data: {
        username: updateContactLineHRDto.username
      }
    })
  }
}
