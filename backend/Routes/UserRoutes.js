const express = require('express')
const User = require('../Models/User')


const router = express.Router()


router.post('/register', (req, res) => {
const {name, email, password} = req.body
const user = new User({name, email, password})
user.save().then(() => {
res.status(201).json({message: 'User registered successfully'})
}
).catch(err => {
res.status(500).json({message: 'Error registering user'})
}
)
}
)



module.exports = router
