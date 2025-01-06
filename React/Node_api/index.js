const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello Slogger"));
app.get("/student", (req, res) => res.send("Beast"));
app.get("/University", (req, res) => res.send("Mumbai University"));
app.get("/college", (req, res) => res.send("K J Somaiya Institute of Management"));
app.listen(port, () => console.log("Wake up to reality... ${port}!"));


