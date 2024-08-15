const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  database: "db_mahasiswa",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) throw err;
  console.log("database conected...");

  const sql = "SELECT * FROM mahasiswa";
  db.query(sql, (err, result) => {
    const users = JSON.parse(JSON.stringify(result));
    console.log("hasil database ->", users);
    app.get("/", (req, res) => {
      res.send(result);
    });
  });
});

app.listen(8000, () => {
  console.log("server ready...");
});
