import express from 'express';
import 'dotenv/config'

import { main } from './connection/connection.mjs'
import productRoute from './routes/productRoutes.mjs';


const app = express();
const port = process.env.PORT;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/api/v1',productRoute);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});