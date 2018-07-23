const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tripSchema = Schema({
    number: {
        type: Number,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    start: {
        type: Date
    },
    tickets: [
        {
            name: {
                type: String
            },
            src: {
                type: String
            },
            price: {
                type: String
            }

        }
    ],
    bookings: [
        {
            name: {
                type: String
            },
            src: {
                type: String
            },
            price: {
                type: String
            }

        }
    ],
    stop: {
        type: Date
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    department_allow: {
      type: Boolean,
      default: false
    },
    director_allow: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('trip', tripSchema)