import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './services/app.service';

@Controller('plan')
export class CatsController {
  constructor(private readonly catsService: AppService) {}

  @Get('/p1')
  getPlanA(): string {
    return this.catsService.getPlanA();
  }

  @Get('/p2')
  getPlanB(): string {
    return this.catsService.getPlanB();
  }

  @Post('/p3')
  getPost(): string {
    return this.catsService.postPlanC();
  }
}
