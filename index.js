//require('dotenv').config();
import dotenv from 'dotenv';
import express  from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
dotenv.config();
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Главная страница сервера запущена!');
})

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, () => {
            console.log('Подключились к базе данных MongoDB');
        })
        app.listen(PORT, () => console.log(`Сервер запущен на порте PORT = ${PORT}`))
    } catch (err){
        console.log(err);
    }
}

start()