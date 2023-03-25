import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './routes/expenses.js';

const app = express();
app.use('/expense', router);

const CONNECTION_URL =
  'mongodb+srv://jatin:jatin123@bookkeeper-db.ldlwwcp.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(3000, () => console.log(`Server is running on ${3000}`))
  )
  .catch((err) => console.log(err.message));
