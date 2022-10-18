const todoService = require("../service/todo-service")

class TodoController {
    async addTodo(req, res, next) {
        try {
            const {todo, userId} = req.body
            const todoData = await todoService.addTodo(todo, userId)
            return res.json(todoData)
        } catch (e) {
            next(e)
        }
    }
    async getTodos(req, res, next) {
        try {
            const {userId} = req.query
            const todos =  await todoService.getTodos(userId)
            return res.json(todos)
        } catch (e) {
            next(e)
        }
    }
    async deleteTodo(req, res, next) {
        try{
            const { id } = req.query
            const todo = await todoService.deleteTodo(id)
            return res.json(todo)
        } catch (e) {
            next(e)
        }
        
    }
    async editTodo(req, res, next) {
        try{
            const { id } = req.query
            const { editedTodo } = req.body
            const todo = await todoService.editTodo(id, editedTodo)
            return res.json(todo)
        } catch (e) {
            next(e)
        }
        
    }
}

module.exports =new TodoController