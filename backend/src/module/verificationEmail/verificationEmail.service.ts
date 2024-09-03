import { otp } from "../../hooks/otpGenerator";
import sendEmail from "../../utils/mail";
import { TVerification } from "./verificationEmail.interface";
import { verification } from "./verificationEmail.model";

const sendCode = async (payload: TVerification) => {
    const otps = otp()
    const result = (await verification.create({...payload,otp:otps}));
    await sendEmail(otps)
  };

  export default {
    sendCode
  }