import { Module } from '@nestjs/common';
import { DivisiService } from './divisi.service';
import { DivisiController } from './divisi.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DivisiController],
  providers: [DivisiService],
})
export class DivisiModule {}
