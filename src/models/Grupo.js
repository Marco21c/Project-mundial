import mongoose from 'mongoose';

const grupoSchema = mongoose.Schema({
    nombre: {type: String, required:true },
    equipo: [{ type: mongoose.Schema.Types.ObjectId, ref: "Equipo" }]
});

export default mongoose.model("Grupo",grupoSchema);