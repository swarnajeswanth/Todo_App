// Getting Buttons & Storing
var add=document.querySelector(".add");
var del=document.querySelector(".delete");
var form=document.querySelector("#form");


// Checking the Valuesof Form
var description=document.querySelector("#Description input");
var date=document.querySelector("#date input");
var category=document.querySelector("#Category select");


add.addEventListener('click',()=>{
    if(description.value=='' || date.value=='' || category.value=='' ){
        alert("Enter the Value Before Adding into DB");
    }
    else{
        form.setAttribute("action","/add");
    }
});

