var faleModel = require("../models/faleModel");

function publicar(req, res) {
    var email = req.body.email;
    var nome = req.body.nome;
    var assunto = req.body.assunto;
    var descricao = req.body.descricao;

    faleModel.publicar(email, nome, assunto, descricao)
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
    publicar
}