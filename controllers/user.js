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

module.exports.getById = (req,res) => {
    try {

    } catch (e) {
        errorhandler(res, e)
    }
}

module.exports.update = (req,res) => {
    try {

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
module.exports.delete = (req,res) => {
    try {

    } catch (e) {
        errorhandler(res, e)
    }
}