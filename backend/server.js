const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dataRoute = require('./routes/dataRoute'); // Import your data routes

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://godwinjudahj:godwinjudahj@cluster0.qqcix.mongodb.net/programs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    // Optionally, check the database version
    return mongoose.connection.db.admin().serverInfo();
  })
  .then(info => {
    console.log('Database Info:', info); // Log database info
  })
  .catch(err => console.error('Connection error:', err));
// Use the data routes
app.use('/api', dataRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
