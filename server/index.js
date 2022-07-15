import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postsRouter from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.use(bodyParser.json({limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}));
app.use(cors());

app.use('/posts', postsRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.URL_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server running on port: ${PORT}`)
})