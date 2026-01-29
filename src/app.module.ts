import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DocentesModule } from './docentes/docentes.module';
import { ReviewsModule } from './reviews/reviews.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/profeideal'),
    AuthModule,
    UsersModule,
    DocentesModule,
    ReviewsModule,
    FavoritesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
