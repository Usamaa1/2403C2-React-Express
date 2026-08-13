import express from 'express';
import 'dotenv/config'
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes.mjs';
import checkRouter from './routes/checkRoute.mjs';


const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.use('/api/v1',authRouter);
app.use('/api/v1',checkRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});