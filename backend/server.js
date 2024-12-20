import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config({ path: './.env' });

import connectDB from './config/mongodb.js'
const uri = process.env.URI || "Hardcoded URI";
console.log('Database URI:', uri);


const port = process.env.PORT || 4000
connectDB();



const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (req, res)=>{
    res.send('API WORKING ');
});

app.listen(port,()=>console.log("Server Started",port));