const EventModel = require("../models/event-model");
const TodoModel = require("../models/todo-model");

class EventService {
    async addEvent (user, name, createdAt, startsAt, endsAt) {
        const event = await EventModel.create({createdAt, user, name, startsAt, endsAt})
        return event
    }
    async getEvents (userId) {
        const events = await EventModel.find({user: userId})
        return events
    }
    async deleteEvent (id) {
        const event = await EventModel.findByIdAndDelete(id) 
        return event
    }
}

module.exports = new EventService()