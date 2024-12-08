const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const cors=require('cors');
const userRouter=require('./routers/user.router');
const userModel=require('./model/user.model');
const todoModel=require('./model/todo.model');
const todoRouter=require('./routers/todo.router');

app.use(bodyParser.json());
app.use('/',userRouter);
app.use(cors());
app.use('/',todoRouter);

module.exports=app;