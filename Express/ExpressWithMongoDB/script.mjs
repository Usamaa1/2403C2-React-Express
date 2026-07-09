import express from 'express';
import studentRouter from './routes/studentRoutes.mjs';
import mailRouter from './routes/mailRoutes.mjs';
import 'dotenv/config'
import imageRouter from './routes/imageRoutes.mjs';


const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/api/v1/student',studentRouter);

app.use('/api/v1',mailRouter);

app.use('/api/v1',imageRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});