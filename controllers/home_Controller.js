const Todo = require("../models/Todo");


// Populating the HTML file and Displaying it in HTML

module.exports.home=function(req,res){

    Todo.find({}).then((Todo)=>{
        
        res.render('home',{
            Todo_List:Todo
        });
    });
    
}

