const TodoModel = require("../models/todo-model");

class TodoService {
    async addTodo (todoText, userId, id) {
        const todo = await TodoModel.create({id: id, todo: todoText, isDone: false, user: userId})
        return todo
    }
    async editTodo (id, editedTodo) {
        const todo = await TodoModel.findOneAndUpdate({id: id}, {$set:{todo: editedTodo}})
        return todo
    }
    async deleteTodo (id) {
        const todo = await TodoModel.findOneAndRemove({id: id})
        return todo
    }
    async getTodos (userId) {
        const todos = await TodoModel.find({user: userId})
        return todos
    }
    async setDone (id) {
        const todo = await TodoModel.findOneAndUpdate({id: id}, {$set:{isDone: true}})
        return todo
    }
    async setUndone (id) {
        const todo = await TodoModel.findOneAndUpdate({id: id}, {$set:{isDone: false}})
        return todo
    }
}

module.exports = new TodoService()