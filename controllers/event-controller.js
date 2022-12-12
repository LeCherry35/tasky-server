const eventService = require("../service/event-service")
const mongoose = require('mongoose')

class EventController {
    async addEvent(req, res, next) {
        try {
            const {createdAt, name, startsAt, endsAt = 0 } = req.body
            const userId = req.user.id
            const eventData = await eventService.addEvent(userId, name, createdAt, startsAt, endsAt)
            return res.json(eventData)
        } catch (e) {
            next(e)
        }
    }
    async getEvents(req, res, next) {
        try {
            const userId = req.user.id
            const events = await eventService.getEvents(userId)
            return res.json(events)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new EventController