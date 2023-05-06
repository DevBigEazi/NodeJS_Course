const mongoose = require('mongoose')
const validator = require('validator')

const Players = mongoose.model('Player', {
    fullName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value){
            if(value > 50){
                throw new Error('You are too old to play football')
            }
        }
    },
    team: {
        type: String
    },
    jersey: {
        type: Number
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password contains password')
            }
        }
    }
})

module.exports = Players