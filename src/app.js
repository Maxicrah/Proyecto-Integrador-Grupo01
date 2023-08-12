const express = require('express');
const app = express();
app.use(express.static('public'));

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/views/home.html');
// });
app.get('/', (req, res) => {
    res.render('index', {'title': 'index.ejs'});
});


app.get('/productDetail', (req, res) => {
    
    res.render('productDetail', {'title': 'productDetail'})
});

app.get('/productCart', (req, res) => {
    
    res.render('productCart', {'title': 'productCart'})
});

app.get('/register', (req, res) => {
    res.render('register', {'title': 'register'})
});

app.get('/login', (req, res) => {
    res.render('login', {'title': 'login'});
});


app.listen(PORT, () => {
    console.log(`PORT: ${PORT}`);
});