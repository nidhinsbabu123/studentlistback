const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then((data)=>{
    console.log('Mongo db Atlas connected to stu server');
}).catch((err)=>{
    console.log('Mongo db connection failed');
})