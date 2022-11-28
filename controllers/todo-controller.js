const todoService = require("../service/todo-service")

class TodoController {
    async addTodo(req, res, next) {
        try {
            const {todo, createdAt, deadline} = req.body
            const userId = req.user.id
            const todoData = await todoService.addTodo(todo, userId, createdAt, deadline)
            return res.json(todoData)
        } catch (e) {
            next(e)
        }
    }
    async getTodos(req, res, next) {
        try {
            const userId = req.user.id
            const todos =  await todoService.getTodos(userId)
            return res.json(todos)
        } catch (e) {
            next(e)
        }
    }
    async deleteTodo(req, res, next) {
        try{
            const { createdAt } = req.query
            const todo = await todoService.deleteTodo(createdAt)
            return res.json(todo)
        } catch (e) {
            next(e)
        }
        
    }
    async editTodo(req, res, next) {
        try{
            const { createdAt } = req.query
            const { editedTodo } = req.body
            const todo = await todoService.editTodo(createdAt, editedTodo)
            return res.json(todo)
        } catch (e) {
            next(e)
        }
        
    }
    async setDone(req, res, next) {
        try {
            const { createdAt } = req.query
            const todo = await todoService.setDone(createdAt)
            return res.json(todo)
        } catch (e) {
            next(e)
        }
    }
    async setUndone(req, res, next) {
        try {
            const { createdAt } = req.query
            const todo = await todoService.setUndone(createdAt)
            return res.json(todo)
        } catch (e) {
            next(e)
        }
    }
    async deleteAll(req, res, next) {
        try {
            const userId = req.user.createdAt
            const todos =  await todoService.deleteAll(userId)
            return res.json(todos)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new TodoController