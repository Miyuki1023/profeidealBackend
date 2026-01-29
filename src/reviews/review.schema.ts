import { Schema } from 'mongoose';

export const ReviewSchema = new Schema({
  userId: String,
  docenteId: String,
  comentario: String,
  positivo: Number,
  negativo: Number,
});
