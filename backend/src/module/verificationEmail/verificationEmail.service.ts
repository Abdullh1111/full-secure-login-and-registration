import config from "../../config";
import AppError from "../../ErrorHandler/appError";
import { otp } from "../../hooks/otpGenerator";
import sendEmail from "../../utils/mail";
import { user } from "../users/user.model";
import { TVerification } from "./verificationEmail.interface";
import { verification } from "./verificationEmail.model";
import  bcrypt  from 'bcrypt';

const sendCode = async (payload: TVerification) => {
  const {email} = payload
    const otps = otp()
    await verification.deleteOne({email})
    const result = (await verification.create({...payload,otp:otps}));
    // console.log(otps);
    
    await sendEmail(otps,payload.email)
  };


  const registration = async (payload: TVerification) => {
    const {email,otp} = payload
    const verifyCode = await verification.findOne({email})
    if(!verifyCode){
      throw new AppError('Otp expired', 400)
    }
    if(verifyCode.otp !== otp){
      
      throw new AppError('Invalid OTP', 400)
    }
    await verification.deleteOne({email})
    const result =await user.create(payload);
    return result;
  };

// update Data
const updateData = async (payload: Partial<TVerification>) => {
  const {email,otp,password} = payload
  const verifyCode = await verification.findOne({email})
    if(!verifyCode){
      throw new AppError('Otp expired', 400)
    }
    if(verifyCode.otp !== otp){
      
      throw new AppError('Invalid OTP', 400)
    }
    await verification.deleteOne({email})
    if(password){
      const pass: string = await bcrypt.hash(password, Number(config.salt));
      payload.password = pass
    }
  const result =await user.updateOne({ email }, payload);
  return result;
};

  export default {
    sendCode,
    registration,
    updateData
  }