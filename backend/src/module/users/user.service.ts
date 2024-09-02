import appError from "../../ErrorHandler/appError";
import { TUser } from "./user.interface";
import { user } from "./user.model";
import bcrypt from "bcrypt";
// registration
const registration = async (payload: Partial<TUser>) => {
  const result = user.create(payload);
  return result;
};

// login
const login = async (payload: Partial<TUser>) => {
  const { email, password } = payload;
  const result = await user.findOne({ email });
  if (!result) {
    throw new appError("User doesn't exist", 400);
  }
  const comparePass = await bcrypt.compare(password as string, result.password);

  if (!comparePass) {
    throw new appError("Invalid password", 400);
  }
  return result;
};

// update Data
const updateData = async (payload: Partial<TUser>, email: string) => {
  const result = user.updateOne({ email }, payload);
  return result;
};

export default {
  registration,
  login,
  updateData,
};
