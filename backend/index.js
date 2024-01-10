const express = require('express')	
const bodyparser = require('body-parser')
const cors = require('cors')
const {connectDB} = require('./connection')
const UserRoutes= require('./Routes/UserRoutes')

connectDB()

const app = express()
app.use(bodyparser())
app.use(cors())
app.use('/user', UserRoutes)




app.listen(3001, () => {
    console.log('Server is running on port 3001')
})


