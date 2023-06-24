"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import authFunctions from "../controllers/login_controller";
// import complete_register from "../controllers/complete_register";
const router = express_1.default.Router();
// router.post("/new_register", authFunctions.auth_register);
// router.post("/complete_register", complete_register);
// router.get("/login", authFunctions.login);
// router.get("/logout", authFunctions.logout);
exports.default = router;
// Registro de usuarios:
// Registro de usuarios:
// Ruta POST para registrar un nuevo usuario: /api/register o /api/signup
// Inicio de sesión de usuarios:
// Ruta POST para iniciar sesión con las credenciales de usuario: /api/login o /api/signin
// Cerrar sesión de usuarios:
// Ruta POST para cerrar la sesión del usuario actual: /api/logout
