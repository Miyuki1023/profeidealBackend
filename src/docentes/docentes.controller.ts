import { Controller, Post, Get, Body } from '@nestjs/common';
import { DocentesService } from './docentes.service';

@Controller('docentes')
export class DocentesController {
  constructor(private service: DocentesService) {}

  @Post()
  create(@Body() body) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
