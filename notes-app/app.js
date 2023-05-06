const chalk = require('chalk')
const getNotes = require('./notes')

const command = process.argv[2]

if (command === 'add') {
    console.log('Adding notes to project')
} 
else if (command === 'remove') {
    console.log('Removing notes from project') 
} 
