import appError from "../../ErrorHandler/appError";
import { TUser } from "./user.interface";
import { user } from "./user.model";
import bcrypt from "bcrypt";
// registration


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



export default {
  login
};
