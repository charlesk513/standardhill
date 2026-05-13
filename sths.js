// Performance Chart
const ctx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2019', '2020', '2022', '2023', '2024'],
        datasets: [{
            label: 'Performance Rate (%)',
            data: [90, 92, 96, 97, 99],
            borderColor: '#004080',
            backgroundColor: 'rgba(0,102,204,0.2)',
            borderWidth: 2,
            pointBackgroundColor: '#ffcc00',
            tension: 0.3
        }]
    },
    options: {
        scales: {
            y: { 
                beginAtZero: true, 
                max: 100,
                title: { display: true, text: 'Pass Rate (%)' }
            },
            x: {
                title: { display: true, text: 'Study Year' }
            }
        },
        plugins: {
            legend: { display: true, labels: { color: '#004080' } },
            tooltip: { enabled: true }
        }
    }
});
