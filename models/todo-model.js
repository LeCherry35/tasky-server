const {Schema, model} = require('mongoose')

const TodoSchema = new Schema({
    createdAt:{type: Number, required: true},
    deadline: {type: Number, required: false},
    completedAt: {type: Number, required: false},
    todo: {type: String, required: true},
    isDone: {type: Boolean, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
})

module.exports = model('Todo', TodoSchema)