const express = require('express');
const app = express();
const routerMain = require('./routes/mainRoute')
const routerProduct = require('./routes/productRoute');
const routerUser = require('./routes/userRoutes');

const path = require('path');
app.use(express.static('public'));
app.use(express.json());


app.use(express.urlencoded({ extended: true }));

const PORT = 3000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routerMain)
app.use('/product', routerProduct)
app.use('/user', routerUser)

app.listen(PORT, ()=>{
    console.log(`PORT: ${PORT}`);
});
