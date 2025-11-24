import mongoose from "mongoose";

const equipoSchema = mongoose.Schema({
   nombre: { type: String, required: true, trim:true},
   partidosJugados: {type:Number, default: 0},
   ganados: {type:Number, default: 0}, 
   perdidos: {type: Number, default: 0},
   empatados: {type: Number, default: 0},
   grupo: { type: mongoose.Schema.Types.ObjectId, ref: "Grupo" }
});

export default mongoose.model("Equipo",equipoSchema);