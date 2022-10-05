import { Module } from '@nestjs/common';
import { CatsController } from './app.controller';
import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [AppService],
})
export class AppModule {}
