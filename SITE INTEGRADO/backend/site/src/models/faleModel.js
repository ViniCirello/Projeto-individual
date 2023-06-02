var database = require("../database/config");

function publicar(email, nome, assunto, descricao) {

    var instrucao = `
    insert into faleConosco (email, nome, assunto, descricao) values ( '${email}', '${nome}', '${assunto}', '${descricao}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    publicar
}
