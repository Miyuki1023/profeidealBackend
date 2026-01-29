import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel('Review') private model: Model<any>) {}

  create(data) {
    return this.model.create(data);
  }

  findByDocente(docenteId: string) {
    return this.model.find({ docenteId });
  }
}
