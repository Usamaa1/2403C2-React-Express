import express from 'express';
import 'dotenv/config'

import { main } from './connection/connection.mjs'
import productRoute from './routes/productRoutes.mjs';
import postRoute from './routes/PostRoutes.mjs';
import employeeRoute from './routes/EmployeeRoutes.mjs';
import orderRoute from './routes/orderRoutes.mjs';


const app = express();
const port = process.env.PORT;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/api/v1',productRoute);
app.use('/api/v1',postRoute);
app.use('/api/v1',employeeRoute);
app.use('/api/v1',orderRoute);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});