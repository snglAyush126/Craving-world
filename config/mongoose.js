
// connection-> schema-> use schema for model

const mongoose = require('mongoose');

// connection
mongoose.connect('mongodb://127.0.0.1:27017/cravingworld')
.then(()=> console.log("connection succesful"))
.catch( ()=> console.log(err));


// exporting
const db= mongoose.connection;
module.exports=db;


