import dotenv from 'dotenv'
import connectDB from './db/index.js';

dotenv.config({
  path : './env'
})

connectDB()


////////////////////////////////////////////////////////////////////////////////////////////////////
// iffi function of javascript to connect to the database immidiately 
// First approach to connect Database 
/*

import express from 'express';
const app = express();
( async () =>{
  try{
   await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on('error', (error) => {
      console.log('Error connecion to database');
      throw error;
    })

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })
  } catch(error){
    console.log("ERROR: ", error);
  }
})();
*///////////////////////////////////////////////////////////////////////////////////////////////////////////



