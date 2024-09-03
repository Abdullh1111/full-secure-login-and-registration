import nodemailer from 'nodemailer'
import AppError from '../ErrorHandler/appError';
import { emailBody } from './emailsBody';
import config from '../config';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: config.email,
    pass: config.password,
  },
});

// async..await is not allowed in global scope, must use a wrapper
 async function sendEmail(otp: string,email:string) {
 try{
  
     // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Secure Login" <abdullahaaa4474032@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Verify your code", // Subject line
    html:emailBody(otp), // html body
  });

 }catch(err: any){
    throw new AppError(err.message, 500);

 }
}

export default sendEmail