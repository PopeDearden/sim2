require('dotenv').config()
const express = require('express')
const massive = require ('massive')
const controller = require ('./controller')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env
massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
},
console.log('db is working'))
.catch(err=>console.log(err))

app.use(express.json())

app.get('/api/homes/', controller.getAll)
app.post('/api/homes/', controller.addHome)
app.delete('/api/homes/:id', controller.deleteHome)

app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} wild chickens laying eggs`))