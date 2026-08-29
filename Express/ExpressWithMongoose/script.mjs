import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { main } from './connection/connection.mjs'
import productRoute from './routes/productRoutes.mjs';
import postRoute from './routes/PostRoutes.mjs';
import employeeRoute from './routes/EmployeeRoutes.mjs';
import orderRoute from './routes/orderRoutes.mjs';
import userRoute from './routes/userRoutes.mjs';
import imageRouter from './routes/imageRoutes.mjs';
import mailRouter from './routes/mailRoutes.mjs';


const app = express();
const port = process.env.PORT;

var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json());
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/api/v1', productRoute);
app.use('/api/v1', postRoute);
app.use('/api/v1', employeeRoute);
app.use('/api/v1', orderRoute);
app.use('/api/v1', userRoute);
app.use('/api/v1', imageRouter);
app.use('/api/v1', mailRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});