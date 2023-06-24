import { model, Schema } from "mongoose";

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, default:"NoData", trim: true },
  lastName: { type: String, required: true, default:"NoData",trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  userPassword: { type: String, required: true, unique: true, trim: true },
  gender : { type: String, required: true, default:"NoData",trim: true },
  dateOfBirth: { type: Date, required: true },
  country : { type: String, required: true,default:"NoData",  trim: true },
  city : { type: String, required: true,default:"NoData",  trim: true },
  address: { type: String, required: true,default:"NoData",  trim: true },
  phone: { type: String, required: true, default:"NoData", trim: true },
  phoneCode: { type: String, required: true, default:"NoData", trim: true },
  completed: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default model("user", userSchema);
