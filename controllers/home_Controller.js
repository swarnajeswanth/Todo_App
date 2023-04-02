const Todo = require("../models/Todo");


// Populating the HTML file and Displaying it in HTML

module.exports.home=function(req,res){
    // Loading the Data present in the DB while Loading the page 
    Todo.find({}).then((Todo)=>{
        res.render('home',{
            Todo_List:Todo
        });
    });
    
}

