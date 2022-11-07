const express = require('express');
const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json())

//app.use( express(JSON));

app.listen(3000, ()=>{
    console.log('SERVER corriendo en http://localhost:3000');
});
app.use(express.static(__dirname + '/'));

app.use('/', require('./router'));

