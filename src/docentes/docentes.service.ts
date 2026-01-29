import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DocentesService {
  constructor(@InjectModel('Docente') private model: Model<any>) {}

  create(data) {
    return this.model.create(data);
  }

  findAll() {
    return this.model.find();
  }
}
