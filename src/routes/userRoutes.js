const express = require('express')
const router = express.Router()
const controllerUser = require('../controller/userController')



router.get('/login', controllerUser.login)
router.get('/register', controllerUser.register)

router.get('/logout', controllerUser.logout)

module.exports = router