function ENVIAR() {

    let email = ipt_email.value
    let nome = ipt_nome.value
    let assunto = ipt_assunto.value
    let descricao = ipt_descricao.value

    let ERRO = false

    if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        alert('Campo de E-mail com erro')
        ERRO = true
    }

    if (nome == '') {
        alert('Campo de nome vazio')
        ERRO = true
    }

    if (assunto == '') {
        alert('Campo de assunto vazio')
        ERRO = true
    }

     if (descricao == '') {
        alert('Campo de descricao vazio')
        ERRO = true
    }
    
    if (ERRO == false) {
        alert('Enviado com sucesso! Sua duvida será respodinda em até 48 horas.')
        fetch('/fale/publicar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                nome: nome,
                assunto: assunto,
                descricao: descricao
            })
        })
            .then(resposta => {
                console.log(resposta.status)
                if (resposta.status == 200) {
                    resposta.json().then(resultado => {
                        console.log(resultado)
                    })
                }
            })
    }

    ipt_email.value = ""
    ipt_nome.value = ""
    ipt_assunto.value = ""
    ipt_descricao.value = ""

}