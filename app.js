import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';
import mainRoutes from './server/routes/main.js';
import { URI_DB } from './configDB.js'


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use('/api/', mainRoutes);

const port = 8080;

// set up mongoose
mongoose.connect(URI_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project CRUD!!',
  });
});

app.listen(port, () => {
  console.log(`Our server is live on ${port}`);
});

