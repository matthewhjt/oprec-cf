import { Module } from '@nestjs/common';
import { SubdivisiService } from './subdivisi.service';
import { SubdivisiController } from './subdivisi.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SubdivisiController],
  providers: [SubdivisiService],
})
export class SubdivisiModule {}
