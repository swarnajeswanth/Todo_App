const express = require('express');

// Predefined Router function for Every possible Routes
const router = express.Router();


// storing the Controller into a variable for using the Function
const home_Controller=require('../controllers/home_Controller');
const add_Controller= require('../controllers/add_Controller');
const delete_Controller=require('../controllers/delete_Controller');
const check_state=require('../controllers/check_state_controller');

// router.get('/Delete-All',delete_All.delete);


// Routes for the Adding , Deleting & Updating the Database and Home page
router.get('/Todo',home_Controller.home);
router.get('/add',add_Controller.add);
router.get('/delete',delete_Controller.delete);
router.get('/check-state',check_state.check);
module.exports=router;



