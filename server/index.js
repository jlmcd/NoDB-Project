const express = require('express')
const controller = require('./controllers/mainController.js')

const app = express()

// Top Level Middleware:
app.use(express.json())

// // End points:
app.get(`/api/chart`, controller.fetchPracticeChart)

app.post(`/api/chart`, controller.newPracticeItem)

app.put(`/api/chart/:id`, controller.updatePracticeItem)

app.delete(`/api/chart/:id`, controller.deleteItem)

const PORT = 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))