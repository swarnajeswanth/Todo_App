const Todo = require("../models/Todo");



// Deleting the Data from DB and Rendering the HTML File 
module.exports.delete=function(req,res){
    let id=req.query.id;
    Todo.findByIdAndRemove(id).then((value,err)=>{
        if(err){console.log(`Error While Deleting Todo List ${err}`);return;}
        res.redirect('back');

    })  
}