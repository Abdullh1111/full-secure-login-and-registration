import { TVerification } from "./verificationEmail.interface";
import { verification } from "./verificationEmail.model";

const sendCode = async (payload: TVerification) => {
    const result = verification.create(payload);
    return result;
  };

  export default {
    sendCode
  }