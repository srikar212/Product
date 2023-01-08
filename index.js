import express from'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import PostRouter from './routes/product.js'; 

const app =  express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts',PostRouter);
const CONNECTION_URL='mongodb+srv://Party_Admin:ACpyIzR8xzVUoRXK@cluster0.tyrbq.mongodb.net/Party_DB?retryWrites=true&w=majority'
const PORT=process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{useNewurlParser: true, useUnifiedTopology: true})
     .then(() => app.listen(PORT,()=>console.log(`server running on port: ${PORT}`)))
     .catch((error) => console.log(error.message));