const User = require('../models/User')
const errorhandler = require('../utils/errorHandler')


module.exports.getAll = async(req,res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (e) {
        errorhandler(res, e)
    }
}

module.exports.getById = async (req,res) => {
    try {
        const user = await User.findById({_id: req.params.id})
        res.status(200).json(user)
    } catch (e) {
        errorhandler(res, e)
    }
}

module.exports.update = async (req,res) => {
    try {
        const user = await User.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
            )
        res.status(200).json(user)
    } catch (e) {
        errorhandler(res, e)
    }
}
module.exports.create = async (req,res) => {
    try {
        const user = await new User({
            name: req.body.name,
            email: req.body.email,
            otdel: req.body.otdel,
            password: req.body.password
        }).save()
        res.status(201).json(user)
    } catch (e) {
        errorhandler(res, e)
    }
}
module.exports.delete = async(req,res) => {
    try {
        await User.remove({_id: req.params.id})
        res.status(200).json({
            message: 'Пользователь удален'
        })
    } catch (e) {
        errorhandler(res, e)
    }
}