import express from "express";
// import router from "./routes/auth_rutes";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/auth/authRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3300;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router );

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
