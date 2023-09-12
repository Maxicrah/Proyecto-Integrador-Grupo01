const express = require('express');
const app = express();
const routerMain = require('./routes/mainRoute')
const routerProduct = require('./routes/productRoute');


const path = require('path');
app.use(express.static('public'));

const PORT = 3000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routerMain)
app.use('/product', routerProduct)


app.listen(PORT, ()=>{
    console.log(`PORT: ${PORT}`);
});