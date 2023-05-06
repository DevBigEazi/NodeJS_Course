const express = require('express')
require('./db/mongoose')
const Players = require('./model/players')


const app = express()
const port = process.env.PORT || 3000
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Twale Asiwaju Oga mhi o😁🦾')
})

app.post('/players', (req, res) => {
    
    const player = new Players(
        req.body
    )

    player.save().then(() => {
        res.status(201).send(player)
    }).catch((err) => {
        res.status(400).send(err)
    })

})

app.get('/players', (req, res) => {
    Players.find({}).then((players) => {
        res.status(200).send(players)
    }).catch((err) => {
        res.status(503).send(err)
    })
})

app.get('/players/:id', (req, res) => {

    const ID = req.params.id

    Players.findById(ID).then((player) => {

        if(!req.params.id){
            res.status(400).send()
        }else {
            res.status(200).send(player)
        }
        
    }).catch((err) => {
        res.status(404).send(err)
    })
    
})












app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})