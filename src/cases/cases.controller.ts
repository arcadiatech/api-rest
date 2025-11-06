import { Controller, Get, Query } from '@nestjs/common';
import { CasesService } from './cases.service';

@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Get()
  findAll(@Query('q') query?: string) {
    return this.casesService.findAll(query);
  }
}
