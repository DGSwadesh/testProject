const express = require("express");
const Student = require("./db/models/students");
require("./db/conn");


const app = express();
const port = process.env.PORT || 8080
app.use(express.json());
// app.get('/',(req,res) => {
//     res.send("hello guys.. this is home page")
// })

// create a new student
app.post('/students', (req, res) => {
    console.log(req.body)
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/students', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData)
    } catch (e) {
        console.log(e)
    }
})

app.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        res.send(studentData)
    } catch (e) {
        console.log(e)
    }
})


app.listen(port, () => {
    console.log(`connecion is setup at ${port}`)
})

