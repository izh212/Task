const express = require('express')	
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyparser())
app.use(cors())

const users = []


app.post('/register', (req, res) => {
    const { name, password, email } = req.body
    users.push({ name, password, email })
    res.status(201)
})



app.listen(3001, () => {
    console.log('Server is running on port 3001')
})


