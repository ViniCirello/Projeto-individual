function LOGIN() {

    var email = ipt_Email.value
    var senha = ipt_Senha.value
    var ERRO = false

    if (email.indexOf('@') == -1 && email.indexOf('.') == -1) {
        alert('Campo de E-mail com erro')
        ERRO = true
    }

    if (ERRO == false) {
        fetch('/usuarios/autenticar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                senha: senha,
            })
        })
            .then(resposta => {
                console.log(resposta.status)
                if (resposta.status == 200) {
                    resposta.json().then(usuario => {
                        localStorage.nome = usuario.nome
                        localStorage.idUsuario = usuario.idUsuario
                        console.log(usuario)
                    })
                    window.location.href = '/COMUNIDADE/COMUNIDADE.html'
                }
            })

    }
}