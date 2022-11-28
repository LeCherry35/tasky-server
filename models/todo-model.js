const {Schema, model} = require('mongoose')

const TodoSchema = new Schema({
    createdAt:{type: String, required: true},
    deadline: {type: String, required: false},
    todo: {type: String, required: true},
    isDone: {type: Boolean, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
})

module.exports = model('Todo', TodoSchema)