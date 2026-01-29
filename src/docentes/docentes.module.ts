import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DocentesController } from './docentes.controller';
import { DocentesService } from './docentes.service';
import { DocenteSchema } from './docente.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Docente', schema: DocenteSchema }]),
  ],
  controllers: [DocentesController],
  providers: [DocentesService],
})
export class DocentesModule {}
