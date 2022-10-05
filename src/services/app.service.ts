import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPlanA(): string {
    return 'Proccessing A';
  }

  getPlanB(): string {
    return 'Proccessing B';
  }

  postPlanC(): string {
    return 'Plan B injected !';
  }
}
