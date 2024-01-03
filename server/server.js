require('dotenv').config();

const PORT = process.env.PORT;
const express = require('express');
const mongoose = require('mongoose');
const linkRoutes = require('./routes/links');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// app.get('/', (req, res) => {
//   res.json({ message: 'big niggas' });
// });

app.use('/api/links', linkRoutes);

// connect to db
mongoose.connect(process.env.DB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listening on ${PORT}`)
    });
  })
  .catch((error) => {
    console.log(error);
  })