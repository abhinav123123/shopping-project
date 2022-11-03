const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const root=require('./util/path');
const {Error}=require('./controller/error');



app.set('view engine', 'ejs');
app.set('views', 'views');

const {Adminrouter} = require('./routes/admin');
const {Clientrouter}= require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'public')));

app.use('/admin', Adminrouter);
app.use(Clientrouter);

app.use(Error);

app.listen(3000);
