const express = require('express');
const app = express();
const routerMain = require('./routes/mainRoute')
const path = require('path');
app.use(express.static('public'));

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/views/home.html');
// });
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/headerFooter.html');
});

app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});


app.listen(PORT, () => {
    console.log(`PORT: ${PORT}`);
});