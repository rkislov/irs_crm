const mongoose = require('mongoose')
const Schema = mongoose.Schema

const otdelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
})

module.exports = mongoose.model('otdels', otdelSchema)