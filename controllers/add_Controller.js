
const Todo = require("../models/Todo");


// Appending the Form Data into the Data Base 

module.exports.add=function(req,res){
   Todo.create({
      description: req.query.description,
      category:req.query.category,
      date:req.query.date
      
   }).catch((err)=>{
      console.log(`Error in Creating the Todo ${err}`);
   });
   res.redirect('back');
}