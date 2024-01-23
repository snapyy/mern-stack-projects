const express =require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryController, getInventoryController } = require('../controllers/inventoryController');

const router=express.Router();

//Routes
// Add Inventory || Post

router.post('/create-inventory',authMiddleware,createInventoryController);

//Get All Blood Record
router.get('/get-inventory',authMiddleware,getInventoryController);
module.exports=router;