import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private service: ReviewsService) {}

  @Post()
  create(@Body() body) {
    return this.service.create(body);
  }

  @Get(':docenteId')
  getByDocente(@Param('docenteId') id: string) {
    return this.service.findByDocente(id);
  }
}
