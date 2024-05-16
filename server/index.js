const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT || 4000;

var cors = require('cors')
app.use(cors())

// Body parser middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api', authRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
