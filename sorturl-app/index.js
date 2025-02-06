const express = require("express");
const url = require("url");
const fs = require("fs");
const app = express();
const port = 3000;
// function test(req, res){      //if want to do same task multiple times

// }

app.get("/readfile", (req, res) => {
  // var data = fs.readFileSync('data.json')
  // res.send(data);

  fs.readFile("data.json", (err, data) => {
    //when path is wrong or name is wrong then send error
    if (err) throw err;
    else res.send(data);
  });
});

function readData() {
  var data = fs.readFileSync("data.json");
  data = JSON.parse(data);
  return data;
}

function saveData(data) {
  fs.writeFileSync("data.json", JSON.stringify(data)); //convert jason to string
}

app.get("/", (req, res) => {
  //res.send("Hello World!")
  console.log(req.query.url);
  var parsedUrl = url.parse(req.query.url);
  if (parsedUrl.protocol && parsedUrl.hostname) {
    var shortcode = Math.floor(Math.random() * 100000);
    var data = readData();
    if (
      !data[shortcode] &&
      !Object.keys(data).find((k) => data[k] == parsedUrl.href)
    )
      data[shortcode] = parsedUrl.href;
    saveData(data);
  }
  // console.log("domain: ", parseUrl.hostname);
  // console.log("host: ", parseUrl.host);
  // console.log("path: ", parseUrl.path);
  // console.log("port: ", parseUrl.port);
  // console.log("protocol: ", parseUrl.protocol);
  // console.log("parseUrl: ", parseUrl);
  res.send("Hello world!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));

