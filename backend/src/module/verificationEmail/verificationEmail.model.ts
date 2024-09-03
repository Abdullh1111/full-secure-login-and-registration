import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config";
import { TVerification } from "./verificationEmail.interface";

const verificationScheema = new Schema<TVerification>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["user", "admin"] , default:'user'},
  },
  {
    timestamps: true,
    expires: 5*60*1000
  }
);

// pre-save function
verificationScheema.pre("save", async function () {
  const pass: string = await bcrypt.hash(this.password, Number(config.salt));

  this.password = pass;
});

// methods

export const user = model<TVerification>("Verification_code", verificationScheema);
