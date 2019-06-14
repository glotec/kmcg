//require
let express = require('express');
let path = require('path');
let expressLayouts = require('express-ejs-layouts');

let app = express();

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.static('public'));

//routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


//let PORT = process.env.PORT || 3000;

//app.listen(PORT, 
    //console.log(`Server started on port ${PORT}`));
app.listen(process.env.PORT || 3000);