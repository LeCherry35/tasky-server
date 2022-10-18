const TodoModel = require("../models/todo-model");

class TodoService {
    async addTodo (todoText, userId) {
        const todo = await TodoModel.create({todo: todoText, isDone: false, user: userId})
        return todo
    }
    async editTodo (id, editedTodo) {
        const todo = await TodoModel.findByIdAndUpdate({_id: id}, {$set:{todo: editedTodo}})
        return todo
    }
    async deleteTodo (id) {
        const todo = await TodoModel.findByIdAndRemove({_id: id})
        return todo
    }
    async getTodos (userId) {
        const todos = await TodoModel.find({user: userId})
        return todos
    }
}

module.exports = new TodoService()