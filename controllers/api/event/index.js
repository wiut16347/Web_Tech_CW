// import specific service class
const event_service = require('../../../services/ticket/')

// mention the service's needed actions (methods)
const event_controller = {
    getAll(req, res) {
        res.json(event_service.getAll())
    }
}

module.exports = event_controller
