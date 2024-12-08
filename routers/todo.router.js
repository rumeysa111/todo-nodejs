const router=require('express').Router();
const todoController=require('../controller/todo.controller');
router.post('/storeTodo',todoController.createTodo);
router.get('/getUserTodoList',todoController.getUserTodo);
router.post('/deleteTodo',todoController.deleteTodo);   




module.exports=router;