import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DivisiModule } from './divisi/divisi.module';
import { Throttle, ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    DatabaseModule, 
    DivisiModule,
    ThrottlerModule.forRoot(
      [
        {
          ttl: 1000,
          limit: 3,
        },
      ])
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
