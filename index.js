const app=require('./app');
const db= require('./config/db');
require('dotenv').config();
const userModel=require('./model/user.model');
const todoModel=require('./model/todo.model');
const connectDB = require('./config/db');
const port= process.env.PORT ||  3000;

connectDB();

app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.listen(port,()=>{
    console.log(`Server is running on port  http://localhost:${port}`);
});

