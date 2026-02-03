import { Schema } from 'mongoose';

export const DocenteSchema = new Schema({
  nombre: String,
  foto: String,
  carrera: String,
  nivel: String,
  universidades: [String],
  cursos: [String],
  etiquetas: {
    puntual: Number,
    estricto: Number,
    motivador: Number,
  },
  ratingPromedio: Number,
});
 
