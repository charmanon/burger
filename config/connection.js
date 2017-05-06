var mysql = require("mysql");

var connection = mysql.createConnection({
  post: 3306,
  host: "localhost",
  user: "root",
  password: "Cano1290",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
