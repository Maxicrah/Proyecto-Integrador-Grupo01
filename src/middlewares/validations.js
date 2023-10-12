const { body } = require('express-validator');

module.exports = {
    validateRegister: [
        body('username').notEmpty().withMessage('Se debe completar el campo nombre de usuario'),
        body('nombre').notEmpty().withMessage('Se debe completar el campo nombre'),
        body('apellido').notEmpty().withMessage('Se debe completar el campo apellido'),
        body('email').notEmpty().isEmail().withMessage('Se debe completar el campo email'),
        body('re_email').notEmpty().isEmail().withMessage('Los correos deben ser iguales'),
        body('password').notEmpty().withMessage('Se debe completar el campo password'),
        body('re_password').notEmpty().withMessage('Debe ser igual al campo password')
    ],
    validateLogin: [

    ]
}