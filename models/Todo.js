
const Mongo=require('mongoose');
const todoSchema = new Mongo.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    checked:{
        type:String,
        default:"unchecked"
    }
});

const Todo =Mongo.model('Todo',todoSchema);

module.exports=Todo;