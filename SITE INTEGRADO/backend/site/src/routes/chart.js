var express = require("express");
var router = express.Router();

var chartController = require("../controllers/chartController");

router.post("/publicar/:idTenis", function (req, res) {
    chartController.publicar(req, res);
});

router.get("/listar/:nomeMarca", function (req, res) {
    chartController.listar(req, res);
});


module.exports = router;

