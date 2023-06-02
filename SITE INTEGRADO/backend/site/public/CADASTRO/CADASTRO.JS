function CADASTRAR() {

    var email = ipt_Email.value
    var cep = ipt_CEP.value
    var senha = ipt_Senha.value
    var numero = ipt_Numero.value
    var nome = ipt_Nome.value

    var ERRO = false

    if (cep.length != 8) {
        alert('Campo de CEP com erro')
        ERRO = true
        console.log(cep)
    }
    if (email.indexOf('@') == -1 && email.indexOf('.') == -1) {
        alert('Campo de E-mail com erro')
        ERRO = true
    }

    if (ERRO == false) {
        fetch('/usuarios/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                cep: cep,
                senha: senha,
                numero: numero,
                nome: nome
            })
        })
        .then(() => {
            alert('Cadastro realizado com sucesso!')
            window.location.href = '/login/login.html'
        }) 
    }
}

