const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const { validateRegister } = require('../middlewares/validations')


router.get('/login', userController.login)
router.get('/register', userController.viewRegister)
router.post('/register', validateRegister, userController.register)

router.get('/logout', userController.logout)

module.exports = router