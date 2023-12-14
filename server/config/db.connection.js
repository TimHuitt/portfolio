const mongoose = require('mongoose');
const {DATABASE_URI} = process.env
mongoose.set('strictQuery', true);
mongoose.connect(DATABASE_URI)

// Connection Events
mongoose.connection
  .on("open", () => console.log("mongoose connected!"))
  .on("close", () => console.log("mongoose disconnected!"))
  .on("error", (error) => console.log(error));