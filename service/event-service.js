const EventModel = require("../models/event-model");
const TodoModel = require("../models/todo-model");

class EventService {
    async addEvent (user, name, createdAt, startsAt, endsAt) {
        console.log('ca',createdAt,'ui', user,'na', name,'sa', startsAt, 'ea',endsAt);
        const event = await EventModel.create({createdAt, user, name, startsAt, endsAt})
        return event
    }
    async getEvents (userId) {
        const events = await EventModel.find({user: userId})
        return events
    }
}

module.exports = new EventService()