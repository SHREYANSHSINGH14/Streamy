import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import errorHandler from './middleware/error.js';
import videoRoutes from './routes/videos.js';
import signUploadRoutes from './routes/sign-upload.js';
import getVideoRoutes from './routes/getVideos.js';

dotenv.config();

//Express
const app = express();
const port  = 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/videos', videoRoutes); 
app.use('/api/sign-upload', signUploadRoutes);
app.use('/api/get-videos',getVideoRoutes);

app.use(errorHandler);

//Listen routes
app.listen(port, ()=>{
  connectDB();
  console.log(`Listening to port ${port}`);
});