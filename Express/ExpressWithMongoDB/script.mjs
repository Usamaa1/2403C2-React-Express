import express from 'express';
import studentRouter from './routes/studentRoutes.mjs';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/api/v1/student',studentRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});