const { Client } = require("pg");
const { config } = require("../config/config");

const pgDbConnection = async (req, res) => {
  const client = new Client({
    host: config.pg.pgHost,
    user: config.pg.pgUser,
    port: config.pg.pgPort,
    password: config.pg.pgPass,
    database: config.pg.pgDb,
  });

  client.connect();

  client.query(
    `insert into register (UserName,Email,phone) values ('Aman','pr@gmail.com','12345678')`,
    (err, res) => {
      if (!err) {
        console.log(res.rows);
      } else {
        console.log(err.message);
      }
      client.end;
    }
  );
};

module.exports = { dbConnection: pgDbConnection };
