import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URI = process.env.DB_URI;


const db_connection = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("DB connection successfully");
    return mongoose.connection;
  } catch (err) {
    console.error(`Database connection error : ${err}`);
    throw err;
  }
};

export default db_connection;
