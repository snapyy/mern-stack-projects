const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonars,
  getDonarsController,
  getHospitalController,
} = require("../controllers/inventoryController");

const router = express.Router();

//Routes
// Add Inventory || Post

router.post("/create-inventory", authMiddleware, createInventoryController);

//Get All Blood Record
router.get("/get-inventory", authMiddleware, getInventoryController);

//Get Donar Record
router.get("/get-donars", authMiddleware, getDonarsController);
module.exports = router;

//Get Hospital Record
router.get("/get-hospitals", authMiddleware, getHospitalController);
module.exports = router;
