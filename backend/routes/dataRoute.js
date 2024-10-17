const express = require('express');
const router = express.Router();
const DataModel = require('../models/DataModel'); // Import the DataModel

// Route to get data from the collection
router.get('/data', async (req, res) => {
  try {
    const data = await DataModel.find();
    console.log(data);
    if (data.length === 0) {
      console.log('No data found in the collection.'); // Log if no data is found
    }
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Export the router
module.exports = router;
