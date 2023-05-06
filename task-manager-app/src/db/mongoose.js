const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager'

mongoose.connect(connectionURL, {useNewUrlParser: true})

// creating mongoose model

// const createPlayer = new Player({
//     fullName: 'Rashford',
//     age: 26,
//     team: 'Man U',
//     jersey: 17,
//     email: '    Rashford@ManUtd.com',
//     password: 'walealatapASSwordheyewbdjfdfvef'
// })

// createPlayer.save().then(createPlayer => {
//     console.log(createPlayer)
// }).catch(err => {
//     throw new Error(err)
// })

// createTask = new Task({
//     taskName: 'Go to market',
//     completed: true
// })

// createTask.save().then(createTask => {
//     console.log(createTask)
// }).catch(err => {
//     throw new Error(err)
// })