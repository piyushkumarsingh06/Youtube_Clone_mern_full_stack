const mongoose = require("mongoose");

// youtubeBackend

mongoose
  .connect('mongodb://0.0.0.0:27017/youtubeBackend')
  .then(() => console.log('DB connection successful!')).catch(err=>{
    console.log(err)
  });