import express from 'express';
import connectDB from './connectdb.js';
import './models/student.js'
const port = process.env.port || 3000 ;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017' ;

const app = express();

// Database Connection
connectDB(DATABASE_URL);

app.listen(port,()=>{
    console.log(`Server Listening at Port ${port}`);
});