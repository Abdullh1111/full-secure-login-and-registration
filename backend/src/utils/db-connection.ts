// getting-started.js
import mongoose from "mongoose";
import config from "../config";


async function main() {
    try {
        
  await mongoose.connect(config.dbUrl as string,{
    dbName:'Secure_Login'
  });
    }catch(err : any){
        throw new Error(err.message)
    }

}
export default main