const chart = document.getElementById('chart');

//Tạo 1 chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],

        datasets: [
            {
                label: '2023',
                data: [2000, 5500, 11000, 22000],
                borderColor: 'red',
                borderWidth: 2
            },

            {
                label: '2024',
                data: [5000, 7000, 12500, 25000],
                borderColor: 'red',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})