import { Controller, Get, Param, Query } from '@nestjs/common';
import { CasesService } from './cases.service';

@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Get()
  findAll(@Query('q') query?: string) {
    return this.casesService.findAll(query);
  }

  @Get(':id/chat')
  getCaseChat(@Param('id') id: string) {
    return this.casesService.getCaseChat(+id);
  }
}
