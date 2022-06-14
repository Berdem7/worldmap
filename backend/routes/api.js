const express = require("express");

const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const DataController = require("../controller/DataController");

//Categories
router.get("/countries", DataController.get_countries);
router.post("/countries", jsonParser, DataController.create_countries);

module.exports = router;
