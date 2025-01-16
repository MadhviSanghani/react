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


//fetch students
app.get("/", (req, res) => res.json(students));

// creating api for add students
app.post("/", (req, res) => {
    const {enrollment_no, name, branch, sem, div, roll_no} = req.body;
    students = [...students, {enrollment_no, name, branch, sem, div, roll_no}];
    res.json(students);
});

//to update students
app.put("/:enrollment_no", (req, res) => {
    const enrollment_no = req.params.enrollment_no;
    const {name, branch, sem, div, roll_no} = req.body;
    students = students.map((student) => student.enrollment_no == enrollment_no
     ? {enrollment_no, name, branch, sem, div, roll_no} 
     : student) //map used for iterate element and represent it as array
     res.json(students);
})

//to delete students
app.delete("/:enrollment_no", (req, res) => {
    const enrollment_no = req.params.enrollment_no;
    students = students.filter((student) => student.enrollment_no != enrollment_no);
     res.json(students);
})


app.listen(port, () =>
  console.log(`Server Started at http://localhost:${port}!`)
);