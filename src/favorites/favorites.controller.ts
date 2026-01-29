import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private service: FavoritesService) {}

  @Post()
  add(@Body() body) {
    return this.service.add(body);
  }

  @Get(':userId')
  find(@Param('userId') id: string) {
    return this.service.findByUser(id);
  }
}
