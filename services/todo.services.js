const todoModel = require('../model/todo.model');   
class TodoService{
    static async createTodo(userId,title,description){
        try {
            const createTodo= new todoModel({
                userId,
                title,
                description
            });
            return await createTodo.save();
            
        } catch (error) {
            throw error;
        }


    }
    static async getTodoData(userId){
        const todoData=await todoModel.find({userId});
        return todoData;
    
    }
    static async deleteToDo(id){
        const deleted = await todoModel.findByIdAndDelete({_id:id})
        return deleted;
   }
     
    
  

   
}
module.exports=TodoService;