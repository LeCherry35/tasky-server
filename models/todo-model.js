const {Schema, model} = require('mongoose')

const TodoSchema = new Schema({
    id: {type: Number, required: true},
    todo: {type: String, required: true},
    isDone: {type: Boolean, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = model('Todo', TodoSchema)