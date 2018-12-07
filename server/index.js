const express = require('express')
const controller = require('./controllers/mainController.js')

const app = express()

// Top Level Middleware:
app.use(express.json())

// End points for Practice Chart:
app.get(`/api/chart`, controller.fetchPracticeChart)

app.post(`/api/chart`, controller.newPracticeItem)

app.put(`/api/chart/:id`, controller.updatePracticeItem)

app.delete(`/api/chart/:id`, controller.deleteItem)

// End point for random quotes
app.get(`/api/quotes`, controller.randomQuote)

const PORT = 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))