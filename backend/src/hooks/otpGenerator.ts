import otpGenerator from 'otp-generator'

 export  const otp = () => otpGenerator.generate(6, { upperCaseAlphabets: true, specialChars: true });