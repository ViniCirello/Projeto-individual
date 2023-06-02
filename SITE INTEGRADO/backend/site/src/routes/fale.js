var express = require("express");
var router = express.Router();

var faleController = require("../controllers/faleController");

router.post("/publicar", function (req, res) {
    faleController.publicar(req, res);
});



module.exports = router;

