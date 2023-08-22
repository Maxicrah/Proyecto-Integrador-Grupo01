const mainController = {
    home: (req, res) => {
        return res.render('home')
    },

    productDetail: (req, res) => {
        return res.render('productDetail')
    },

    cartDetail: (req, res) => {
        return res.render('cartDetail')
    },

    register: (req, res) => {
        return res.render('register')
    },

    login: (req, res) => {
        return res.render('login')
    }
}

module.exports = mainController