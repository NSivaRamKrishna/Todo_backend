const express = require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();

app.use(cors({origin:"*"}));
app.use(express.json());

const authenticationRoutes = require('./Routes/authenticationRoutes');
const taskRoutes = require('./Routes/taskRoutes');
const todoRoutes = require('./Routes/todoRoutes');
app.use(authenticationRoutes);
app.use(taskRoutes);
app.use(todoRoutes);

const User=require('./models/user');
const Task = require('./models/task');
const Usertask = require('./models/usertask');
User.sync().then(()=>{
    console.log("User Model synced");
})
Task.sync().then(()=>{
    console.log("Task model synced");
})
Usertask.sync().then(()=>{
    console.log("Usertask model synced");
})
const PORT = process.env.PORT || 9000;

app.get("/", async(req,res) => {
    res.json({
        message: "sucess"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})