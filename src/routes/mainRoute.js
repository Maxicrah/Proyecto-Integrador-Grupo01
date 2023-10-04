const express = require('express')
const router = express.Router()
const controller = require('../controller/mainController')

router.get('', controller.home)

router.get('/productDetail/:id', controller.productDetail)

router.get('/productCart', controller.cartDetail)

router.get('/register', controller.register)

router.get('/login', controller.login)

router.get('/formCreateProduct', controller.formCreateProduct)

router.get('/formEditProduct', controller.formEditProduct)
 
router.get('/products', controller.products)


module.exports = router