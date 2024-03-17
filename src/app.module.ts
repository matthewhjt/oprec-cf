import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DivisiModule } from './divisi/divisi.module';

@Module({
  imports: [DatabaseModule, DivisiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
