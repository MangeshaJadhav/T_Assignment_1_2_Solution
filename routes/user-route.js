const { Router } = require("express");
const { registerUser } = require("../controller/user-controller");
const UserModel = require("../models/user-model");
const UserRoutes = Router();

UserRoutes.get("/ping", (req, res) => {
  console.log(req);
  console.log("PONG");
  res.send("PONG");r
});

UserRoutes.post("/register", registerUser);

module.exports = UserRoutes;
