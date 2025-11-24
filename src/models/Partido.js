import mongoose from "mongoose";

const partidoSchema = mongoose.Schema({ 
      equipoA: { type: mongoose.Schema.Types.ObjectId, ref: "Equipo", required: true},
      equipoB: { type: mongoose.Schema.Types.ObjectId, ref: "Equipo", required: true},
      golesA: {type:Number, default:0},
      golesB: {type:Number, default:0},
      fecha: {type:Date, required:true},
      estado: {type:String, required:true}
});

export default mongoose.model("Partido",partidoSchema);