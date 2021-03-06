const express = require("express");

const app = express();
const { HTTP_PORT } = process.env;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

connection.query("INSERT INTO people SET ?", { name: "Felipe" }, (err) => {
  if (err) console.error("Error while inserting a name on DB:\n", err);
});

app.use(express.json());

app.post("/", ({ body }, res) => {
  if (!body) return res.status(400).end();
  const { name } = body;

  connection.query("INSERT INTO people SET ?", { name }, (err) => {
    if (err) return res.status(500);
    res.status(201).send("<h1>Full Cycle Rocks!</h1>");
  });
});

app.get("/", (_, res) => {
  connection.query("SELECT * FROM people", (err, result) => {
    if (err) return res.status(500);
    const resHtml = `
      <h1>Full Cycle Rocks!</h1>
      <ul>
        ${result.map((dbRow) => `<li>${dbRow.name}</li>`)}
      </ul>
    `;

    return res.send(resHtml);
  });
});

app.listen(HTTP_PORT, () => {
  console.log("🚀 server ready on port " + HTTP_PORT);
});
