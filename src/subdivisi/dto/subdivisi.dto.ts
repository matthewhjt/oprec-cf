import { PartialType } from '@nestjs/mapped-types'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateSubdivisiDTO{
    @IsNotEmpty()
    @IsString()
    idDivisi: string

    @IsNotEmpty()
    @IsString()
    deskripsi: string

    @IsNotEmpty()
    @IsString()
    jobDesc: string

    @IsNotEmpty()
    @IsString()
    nama: string
}

export class UpdateSubdivisiDTO extends PartialType(CreateSubdivisiDTO) {}

export class CreateSubdivisiHRDTO{
    @IsNotEmpty()
    @IsString()
    idSubdivisi: string

    @IsNotEmpty()
    @IsString()
    nama: string
}

export class UpdateSubdivisiHRDTO extends PartialType(CreateSubdivisiHRDTO) {}

export class CreateContactWADTO {
    @IsNotEmpty()
    @IsNumber()
    nomor: number
}

export class UpdateContactWADTO extends PartialType(CreateContactWADTO) {}

export class CreateContactLineDTO {
    @IsNotEmpty()
    @IsNumber()
    username: string
}

export class UpdateContactLineDTO extends PartialType(CreateContactLineDTO) {}