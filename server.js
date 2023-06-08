const express = require("express");
const app = express();
require("./db-connection/mongoose")
const UserRoutes = require("./routes/user-route")

// Add Routes
app.use(express.json());

app.use('/users', UserRoutes)

app.listen("3000", "127.0.0.1", () => {
  console.log("Server running at port 3000");
});
