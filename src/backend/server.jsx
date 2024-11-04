const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookingRoutes = require('./bookingRoutes');  

dotenv.config(); 
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.use('/api/bookings', bookingRoutes); 


app.get('/', (req, res) => {
  res.send('Backend server is running');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
