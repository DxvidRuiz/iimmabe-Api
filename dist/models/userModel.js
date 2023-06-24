"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userName: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, default: "NoData", trim: true },
    lastName: { type: String, required: true, default: "NoData", trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    userPassword: { type: String, required: true, unique: true, trim: true },
    gender: { type: String, required: true, default: "NoData", trim: true },
    dateOfBirth: { type: Date, required: true },
    country: { type: String, required: true, default: "NoData", trim: true },
    city: { type: String, required: true, default: "NoData", trim: true },
    address: { type: String, required: true, default: "NoData", trim: true },
    phone: { type: String, required: true, default: "NoData", trim: true },
    phoneCode: { type: String, required: true, default: "NoData", trim: true },
    completed: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)("user", userSchema);
