// Gráfico da Nike
const ctx = document.getElementById('myChart');


var dadosGraficoNike = []
var labelsGraficoNike = []

var dadosGraficoAdidas = []
var labelsGraficoAdidas = []

var dadosGraficosNewBalance = []
var labelsGraficoNewBalance = []

var chartNike = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelsGraficoNike,
            datasets: [{
            data: dadosGraficoNike[0], 
            borderWidth: 1,
            backgroundColor: [
                'rgba(13, 200, 66, 0.532)',
           
              ],
              borderColor: [
                'rgb(6, 148, 46)',
               
              ],
        },
        // {
        //     label: 'VaporMax',
        //     data: dadosGraficoNike[1],
        //     borderWidth: 1
        // }, {


        //     label: 'Air Jordan 2',
        //     data: dadosGraficoNike[2],
        //     borderWidth: 1

        // }, {


        //     label: 'Ja 1',
        //     data: dadosGraficoNike[3],
        //     borderWidth: 1
        // }


        ]
    },
    options: {
        plugins:{legend:{display:false}},
        scales: {
            y: {
                ticks:{
                    stepSize: 1
                },
                beginAtZero: true
            }
        }
    }
});


// Gráfico da Adidas
const ctx2 = document.getElementById('myChart_adidas');

var chartAdidas = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: labelsGraficoAdidas,
            datasets: [{
            data: dadosGraficoAdidas[0], 
            borderWidth: 1,
            backgroundColor: [
                'rgba(13, 200, 66, 0.532)',
           
              ],
              borderColor: [
                'rgb(6, 148, 46)',
               
              ],
        }


        ]
    },
    options: {
    plugins:{legend:{display:false}},
        scales: {
            y: {
                ticks:{
                    stepSize: 1
                },
                beginAtZero: true
            }
        }
    }
}
);


// Gráfico da newbalance
const ctx3 = document.getElementById('myChart_NewBalance');

var chartNewBalance = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: labelsGraficoNewBalance,
            datasets: [{
            data: dadosGraficosNewBalance[0], 
            borderWidth: 1,
            backgroundColor: [
                'rgba(13, 200, 66, 0.532)',
           
              ],
              borderColor: [
                'rgb(6, 148, 46)',
               
              ],
        }

        ]
    },
    options: {
        plugins:{legend:{display:false}},
            scales: {
                y: {
                    ticks:{
                        stepSize: 1
                    },
                    beginAtZero: true
                }
            }
        }
    }
    );

window.load = listarNike()
function listarNike() {
    fetch(`/chart/listar/Nike`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(resposta => {
            console.log(resposta.status)
            if (resposta.status == 200) {
                resposta.json().then(usuario => {

                    for( var i = 0; i < usuario.length ; i++) {
                        dadosGraficoNike.push(usuario[i].contagem)
                        labelsGraficoNike.push(usuario[i].nome)
                    }
                    chartNike.data.datasets[0].data = dadosGraficoNike 
                    chartNike.update(),
                    console.log(usuario)

                    // for( var i = 0; i < usuario.length ; i++) {
                    //     dadosGraficoAdidas.push(usuario[i].contagem)
                    //     labelsGraficoAdidas.push(usuario[i].nome)
                    // }
                    // chartAdidas.data.datasets[0].data = dadosGraficoAdidas 
                    // chartAdidas.update(),
                    // console.log(usuario)

                    // for( var i = 0; i < usuario.length ; i++) {
                    //     dadosGraficosNewBalance.push(usuario[i].contagem)
                    //     labelsGraficoNewBalance.push(usuario[i].nome)
                    // }
                    // chartNewBalance.data.datasets[0].data = dadosGraficosNewBalance 
                    // chartNewBalance.update(),
                    // console.log(usuario)


                })
                
            }
        })
}

window.load = listarAdidas()
function listarAdidas() {
    fetch(`/chart/listar/Adidas`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(resposta => {
            console.log(resposta.status)
            if (resposta.status == 200) {
                resposta.json().then(usuario => {


                    for( var i = 0; i < usuario.length ; i++) {
                        dadosGraficoAdidas.push(usuario[i].contagem)
                        labelsGraficoAdidas.push(usuario[i].nome)
                    }
                    chartAdidas.data.datasets[0].data = dadosGraficoAdidas 
                    chartAdidas.update(),
                    console.log(usuario)


                })
                
            }
        })
}
window.load = listarNewBalance()
function listarNewBalance() {
    fetch(`/chart/listar/New Balance`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(resposta => {
            console.log(resposta.status)
            if (resposta.status == 200) {
                resposta.json().then(usuario => {

                    
                    for( var i = 0; i < usuario.length ; i++) {
                        dadosGraficosNewBalance.push(usuario[i].contagem)
                        labelsGraficoNewBalance.push(usuario[i].nome)
                    }
                    chartNewBalance.data.datasets[0].data = dadosGraficosNewBalance 
                    chartNewBalance.update(),
                    console.log(usuario)


                })
                
            }
        })
}

function Inserir(idTenis) {
    fetch(`/chart/publicar/${idTenis}`,{
        method: "POST"
    }).catch(e => console.log(e))
}