var database = require("../database/config");

function publicar(idTenis) {
    console.log('Passei aqui uhuuuul')
    var instrucao = `
    UPDATE Tenis
	SET visitas = visitas + 1
	WHERE idTenis = ${idTenis};

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar(nomeMarca) {

    var instrucao = `
    select Visitas as contagem, nome from tenis where marca = '${nomeMarca}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    publicar,
    listar
}
