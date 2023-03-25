const Todo = require("../models/Todo");



// Function for checking the CheckBox state and storing it in DB
module.exports.check=function(req,res){
    let id=req.query.id;
    

    Todo.find({_id:id}).then((value)=>{
        if(value[0].checked=='checked'){
            Todo.findByIdAndUpdate({_id:id},{checked:"unchecked"}).catch((err)=>{
                console.log(`Error while updating ${err}`);
            });
            return;
        }
        else{
            Todo.findByIdAndUpdate({_id:id},{checked:"checked"}).catch((err)=>{
                console.log(`Error while updating ${err}`);
            });
        }
    })

    res.redirect('Todo');
    };

