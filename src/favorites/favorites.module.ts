import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';
import { FavoriteSchema } from './favorite.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Favorite', schema: FavoriteSchema }]),
  ],
  controllers: [FavoritesController],
  providers: [FavoritesService],
  exports: [FavoritesService],
})
export class FavoritesModule {}
