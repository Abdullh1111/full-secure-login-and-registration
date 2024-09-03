import sendEmail from "../../utils/mail";
import { TVerification } from "./verificationEmail.interface";
import { verification } from "./verificationEmail.model";

const sendCode = async (payload: TVerification) => {
    const result = verification.create(payload);
    await sendEmail()
    return result;
  };

  export default {
    sendCode
  }