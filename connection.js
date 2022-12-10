const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://ahmedzafar:tTqoOvhQTGCaCzXi@react-medium.fpirl.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
