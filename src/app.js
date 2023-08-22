const express = require('express');
const app = express();
const routerMain = require('./routes/mainRoute')
const path = require('path');
app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000

app.use('/', routerMain)

app.listen(PORT, () => {
    console.log(`PORT: ${PORT}`);
});