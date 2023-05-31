// Gráfico da Nike
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Tênis'],
        datasets: [{
            label: 'Nike SB Dunk High',
            data: [68],
            borderWidth: 1
        },
        {
            label: 'VaporMax',
            data: [37],
            borderWidth: 1
        }, {


            label: 'Air Jordan 2',
            data: [60],
            borderWidth: 1

        }, {

            
            label: 'Ja 1',
            data: [20],
            borderWidth: 1
        }
        

        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// Gráfico da Adidas
const ctx2 = document.getElementById('myChart_adidas');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Tênis'],
        datasets: [{
            label: 'Adidas Top 10 ',
            data: [83],
            borderWidth: 1
        },
        {
            label: 'Adidas NMD S1',
            data: [60],
            borderWidth: 1
        }, {


            label: 'Adidas CENTENNIAL',
            data: [45],
            borderWidth: 1

        }, {

            
            label: 'Adidas ORKETRO',
            data: [12],
            borderWidth: 1
        }
        

        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// Gráfico da newbalance
const ctx3 = document.getElementById('myChart_NewBalance');

new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Tênis'],
        datasets: [{
            label: 'New Balance 9060',
            data: [31],
            borderWidth: 1
        },
        {
            label: 'New Balance Warped',
            data: [12],
            borderWidth: 1
        }, {


            label: 'New Balance 550',
            data: [78],
            borderWidth: 1

        }, {

            
            label: 'New Balance - 5740',
            data: [34],
            borderWidth: 1
        }
        

        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});