const express = require("express");
const app = express();
const port = 3000;
// to pass jason
app.use(express.json());         // middleware = execute in between

var students = [
  {
    enrollment_no: "123456789",
    name: "Madhvi",
    branch: "CE",
    sem: 6,
    div: "B",
    roll_no: 23,
  },
];

//for add the students


app.get("/", (req, res) => res.json(students));

// creating api for add students
app.post("/", (req, res) => {
    const {enrollment_no, name, branch, div, roll_no} = req.body;
    students = [...students, {enrollment_no, name, branch, div, roll_no}];
    res.json(students);
});

app.listen(port, () =>
  console.log(`Server Started at http://localhost:${port}!`)
);