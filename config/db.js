import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log("Veritabanı bağlantısı başarılı");
  } catch (error) {
    console.log("Veritabanı bağlantısı başarısız!!!");
  }
};

export { connectDB };
