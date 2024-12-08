const TodoService = require('../services/todo.services');

exports.createTodo = async (req, res,next) => {
    try {
        const {userId,title,description}=req.body;
        let todo=await TodoService.createTodo(userId,title,description);
        res.json({status:true,success:todo});

        
    } catch (error) {
        next(error);
        
    }

}

exports.getUserTodo = async (req, res,next) => {
    try {
        const {userId}=req.query;
        let todo=await TodoService.getTodoData(userId);
        res.json({status:true,success:todo});
        
    } catch (error) {
        next(error);
        
    }

}
exports.deleteTodo = async (req, res,next) => {
    try {
        const {id}=req.body;
        let deleted=await TodoService.deleteToDo(id);
        res.json({status:true,success:deleted});
        
    } catch (error) {
        next(error);
        
    }

}