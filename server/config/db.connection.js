const express = require('express');
const mongoose = require('mongoose');
const { DATABASE_URI } = process.env;

mongoose.set('strictQuery', true);
mongoose.connect(DATABASE_URI);

// Express app
const app = express();

// Serve static files (replace 'public' with the actual directory where your static files are located)
app.use(express.static('public'));

// Additional middleware and routes go here...

// Connection Events
mongoose.connection
  .on('open', () => console.log('mongoose connected!'))
  .on('close', () => console.log('mongoose disconnected!'))
  .on('error', (error) => console.log(error));

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
