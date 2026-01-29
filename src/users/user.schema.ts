import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  nombre: String,
  email: { type: String, unique: true },
  password: String,
});
