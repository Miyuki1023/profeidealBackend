import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FavoritesService {
  constructor(@InjectModel('Favorite') private model: Model<any>) {}

  add(data) {
    return this.model.create(data);
  }

  findByUser(userId: string) {
    return this.model.find({ userId });
  }
}
