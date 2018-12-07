const express = require('express')
const controller = require('./controllers/mainController.js')

const app = express()

// Top Level Middleware:
app.us(expres.json())

// End points:
app.get(`/api/poiu`, controller.getAll)

const PORT = 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))