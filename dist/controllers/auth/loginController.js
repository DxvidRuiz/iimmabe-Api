"use strict";
// Recibir los datos del formulario: El controlador debe recibir los datos enviados desde el formulario de registro, que generalmente se envían a través de una solicitud POST. Puedes acceder a los datos del cuerpo de la solicitud utilizando un middleware adecuado, como body-parser o la función express.json() en Express.js.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// // import mongoose from "mongoose";
// import { encryptPassword } from "../helpers/Encrypt";
// import user_model from "../models/user_model";
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
