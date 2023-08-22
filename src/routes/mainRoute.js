const express = require('express')
const router = express.Router()
const controller = require('../controller/mainController')

router.get('/home', controller.home)

router.get('/productDetail', controller.productDetail)

router.get('/productCart', controller.cartDetail)

router.get('/register', controller.register)

router.get('/login', controller.login)

module.exports = router