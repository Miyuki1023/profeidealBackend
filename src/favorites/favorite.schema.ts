import { Schema } from 'mongoose';

export const FavoriteSchema = new Schema({
  userId: String,
  docenteId: String,
});
