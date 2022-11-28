const TodoModel = require("../models/todo-model");

class TodoService {
    async addTodo (todoText, userId, createdAt, deadline) {
        const todo = await TodoModel.create({createdAt: createdAt, todo: todoText, isDone: false, user: userId, deadline})
        return todo
    }
    async editTodo (createdAt, editedTodo) {
        const todo = await TodoModel.findOneAndUpdate({createdAt: createdAt}, {$set:{todo: editedTodo}})
        return todo
    }
    async deleteTodo (createdAt) {
        const todo = await TodoModel.findOneAndRemove({createdAt: createdAt})
        return todo
    }
    async getTodos (userId) {
        const todos = await TodoModel.find({user: userId})
        return todos
    }
    async setDone (createdAt) {
        const todo = await TodoModel.findOneAndUpdate({createdAt: createdAt}, {$set:{isDone: true}})
        return todo
    }
    async setUndone (createdAt) {
        const todo = await TodoModel.findOneAndUpdate({createdAt: createdAt}, {$set:{isDone: false}})
        return todo
    }
    async deleteAll (userId) {
        const todos = await TodoModel.deleteMany({user: userId})
        return todos
    }
}

module.exports = new TodoService()