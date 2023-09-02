const productController = require("./productsController") //importamos controlador de productos

const mainController = {
    home: (req, res) => {
        return res.render('home')
    },

    productDetail: (req, res) => {
        return res.render('productDetail')
    },

    cartDetail: (req, res) => {
        return res.render('productCart')
    },

    register: (req, res) => {
        return res.render('register')
    },

    login: (req, res) => {
        return res.render('login')
    },

    formCreateProduct: (req, res) => {
        return res.render('formCreateProduct')
    },

    products: (req, res) => {
        const productos = productController.obtenerProductos();
        console.log(productos);
        return res.render("products", { productos })
    }
}

module.exports = mainController