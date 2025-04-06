require('dotenv').config();
const mongoose = require('mongoose');

const mongoURL = 'mongodb://mongodb:27017/mydb';

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection failed:', err));
