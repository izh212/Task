const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect('mongodb://localhost:27017/task-manager').then(() => console.log('Connected to MongoDB')).catch(err => console.log(err))
}   

module.exports = {connectDB};