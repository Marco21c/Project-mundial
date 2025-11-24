import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mundial_db");
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error al conectar MongoDB:", error);
  }
};

