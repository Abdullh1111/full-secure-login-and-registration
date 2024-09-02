// getting-started.js
import mongoose from "mongoose";


async function main() {
    try {
        
  await mongoose.connect('mongodb://127.0.0.1:27017/test',{
    dbName:'Secure Login'
  });
    }catch(err : any){
        throw new Error(err.message)
    }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
export default main