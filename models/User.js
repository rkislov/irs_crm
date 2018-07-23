const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    otdel: {
        ref: ('otdels'),
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('users', userSchema)