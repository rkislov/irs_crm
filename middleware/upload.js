const multer = require('multer')
const moent = require('moment')


const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null,'public/files/'+ moment().format('DDMMYYY') +'/')
    },
    filename(req, file, cb) {
        const date = moment().format('DDMMYYY-HHmmss_SSS')
        cb(null, `${date}-${file.originalname}`)
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
const limits = {
    fileSize: 1024*1024*20
}
module.exports = multer({storage, fileFilter, limits})