const {Schema, model} = require('mongoose')

const EventSchema = new Schema({
    name: {type: String, required: true},
    createdAt:{type: Number, required: false},
    startsAt: {type: Number, required: true},
    endsAt: {type: Number, required: false},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
})

module.exports = model('Event', EventSchema)