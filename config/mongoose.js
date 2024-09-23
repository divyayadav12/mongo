const mongoose = require('mongoose')
function connect(){
    mongoose.connect("mongodb://0.0.0.0:27017/testfsfsgdb").then(()=>{
        console.log("connected to mongodb");
    }).catch((err)=>{
        console.log("error connecting to mongoddb");
    })
    
}
 module.exports=connect