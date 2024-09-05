import { model, Schema } from "mongoose";
// import bcrypt from "bcrypt";
// import config from "../../config";
import { TVerification } from "./verificationEmail.interface";
const verificationSchema = new Schema<TVerification>(
  {
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String },
    otp: {type: String},
    role: { type: String, required: true, enum: ["user", "admin"], default: 'user' },
    createdAt: {type:Date, default: Date.now, expires:300}
  }
);


// pre-save function
// verificationSchema.pre("save", async function () {
//   const pass: string = await bcrypt.hash(this.password, Number(config.salt));
//   this.password = pass;
// });
// methods
export const verification = model<TVerification>("verification", verificationSchema);
