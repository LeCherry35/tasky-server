const TodoModel = require("../models/todo-model");

class TodoService {
    async addTodo (todoText, userId) {
        const todo = await TodoModel.create({id: Date.now(), todo: todoText, isDone: false, user: userId})
        return todo
    }
    async editTodo (id, todoText) {
        const todo = await TodoModel.findOne({id})
        todo.todo = todoText
        await todo.save()
    }
    async deleteTodo (id) {

    }
    async getTodos (userId) {
        const todos = await TodoModel.find({userId})
        return todos
    }
}

module.exports = new TodoService()