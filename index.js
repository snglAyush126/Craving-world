const express = require("express");
const fs= require("fs");
const app =  express();
const port = process.env.PORT || 3000; // Use the PORT environment variable if set, otherwise default to 3000
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded({extended: true}));
app.use(express.static('./assets'));
app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});