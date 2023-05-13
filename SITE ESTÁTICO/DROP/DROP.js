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