const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.use('/api/v1/tasks', tasks)

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
	} catch (error) {
		console.log(error)
	}
}

start()
