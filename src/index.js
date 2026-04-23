import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection faied !!!", err);
  });

/*
import express from 'express'
const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",()=>{
        console.log("ERROR", error);
        throw error
        
    })
    app.listen(process.env.PORT,()=>{
        console.log(`App is running on ${process.env.PORT}`);
        
    })
  } catch (error) {
    console.error("ERROR", error);
    throw err;
  }
})();
*/
