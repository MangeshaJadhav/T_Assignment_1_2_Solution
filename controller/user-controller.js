const UserModel = require("../models/user-model");

const registerUser = (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;

  const user = new UserModel({ name, email, phone });
  user.save();
  const userObject = {
    httpStatusCode: 200,
    message: "User Registered Successfully",
    result: {
      id: 1,
      name,
      email,
      phone,
    },
  };
};


const registerUserInPostgres = (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;

  client.query(
    `insert into users (UserName,Email,phone) values ('Aman','pr@gmail.com','12345678')`,
    (err, res) => {
      if (!err) {
        console.log(res.rows);
      } else {
        console.log(err.message);
      }
      client.end;
    }
  );

  const userObject = {
    httpStatusCode: 200,
    message: "User Registered Successfully",
    result: {
      id: 1,
      name,
      email,
      phone,
    },
  };
};



module.exports = { registerUser, registerUserInPostgres };
