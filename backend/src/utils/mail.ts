import nodemailer from 'nodemailer'
import AppError from '../ErrorHandler/appError';
import { emailBody } from './emailsBody';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "abdullahaaa4474032@gmail.com",
    pass: "fjfc szky gqik wsex",
  },
});

// async..await is not allowed in global scope, must use a wrapper
 async function sendEmail() {
 try{
     // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Secure Login" <abdullahaaa4474032@gmail.com>', // sender address
    to: "gifirag224@ndiety.com", // list of receivers
    subject: "Verify your code", // Subject line
    html:emailBody, // html body
  });

  console.log("Message sent: %s", info.messageId);
 }catch(err: any){
    throw new AppError(err.message, 500);

 }
}

export default sendEmail