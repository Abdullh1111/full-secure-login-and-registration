import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config";
import { TVerification } from "./verificationEmail.interface";

const verificationSchema = new Schema<TVerification>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["user", "admin"], default: 'user' },
  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
  }
);

// Create a TTL index on the createdAt field
verificationSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });  // 180 seconds = 3 minutes

// pre-save function
verificationSchema.pre("save", async function () {
  const pass: string = await bcrypt.hash(this.password, Number(config.salt));
  this.password = pass;
});

// methods
export const verification = model<TVerification>("Verification_code", verificationSchema);
