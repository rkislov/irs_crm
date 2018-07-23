const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async (req,res) => {
    const candidate = await User.findOne({email: req.body.email})

    if(candidate){
        //check password
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult){
            //generate token
            const token = jwt.sign({
                name: candidate.name,
                email: candidate.email,
                userId: candidate._id
            }, keys.jwt , {expiresIn: 60 * 60})

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            //passwords not compare
            res.status(401).json({
                message:'Пароли не совпадают. Поробуйте снова'
            })
        }
    } else {
        //if user is apsent
        res.status(404).json({
            message: 'Пользователь с таким email не найден'
        })
    }
}

module.exports.register = async (req,res) => {
    const candidate = await User.findOne({email: req.body.email})
    if (candidate) {
        // User exist, ned answer error
        res.status(409).json({
            message: 'Такой email уже занят. Попробуйте другой'
        })
    } else {
        // Create new User
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })
        try {
            await user.save()
            res.status(201).json(user)
        } catch (e) {
            errorHandler(res, e)
        }

    }
}