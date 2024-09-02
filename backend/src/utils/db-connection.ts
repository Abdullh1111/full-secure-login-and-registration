// getting-started.js
import mongoose from "mongoose";
import config from "../config";


async function main() {
    try {
        
  await mongoose.connect(config.dbUrl as string,{
    dbName:'Secure Login'
  });
    }catch(err : any){
        throw new Error(err.message)
    }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
export default main