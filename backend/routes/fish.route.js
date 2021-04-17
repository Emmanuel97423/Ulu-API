const express = require("express");
const router = express.Router();
const fishCtrl = require("../controllers/fish.controller");

router.get("/fishies", fishCtrl.getAllFish);
router.post("/fish", fishCtrl.postOneFish);
router.put("/fish/:id", fishCtrl.addDib);

module.exports = router;
