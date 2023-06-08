const mongoose = require("mongoose");

//DB Connection
mongoose
  .connect(
    "mongodb+srv://mercore-dev:1jK6td7xwjrXHa5A@mercore-dev.xoaph.mongodb.net/my-first-setup?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"));
