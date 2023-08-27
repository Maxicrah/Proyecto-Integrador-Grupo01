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
    }
}

module.exports = mainController