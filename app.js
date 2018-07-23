const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const keys = require('./config/keys')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const tripRoutes = require('./routes/trip')
const app = express()

mongoose.connect(keys.mongoURI, { useNewUrlParser: true } )
    .then(()=>console.log('База данных подключена'))
    .catch(error=>console.error(`возникла ошибка ${error}`))

app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/trip', tripRoutes)


module.exports = app