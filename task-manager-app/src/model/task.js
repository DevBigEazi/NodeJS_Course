const mongoose = require('mongoose')

const Task =  mongoose.model('Task', {
    taskName: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

module.exports = Task