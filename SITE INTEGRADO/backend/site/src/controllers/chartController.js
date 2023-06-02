var chartModel = require("../models/chartModel");

function publicar(req, res) {
    var idTenis = req.params.idTenis;
    console.log('OI ANDREYYYYYYYYYYYYYY')
    chartModel.publicar(idTenis)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listar(req, res) {

    var nomeMarca = req.params.nomeMarca

    chartModel.listar(nomeMarca)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    publicar

}