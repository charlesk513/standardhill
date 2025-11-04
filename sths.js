// Performance Chart
const ctx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2021', '2022', '2023', '2024', '2025'],
        datasets: [{
            label: 'Performance Rate (%)',
            data: [94, 95, 96, 97, 97],
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
                title: { display: true, text: 'Year' }
            }
        },
        plugins: {
            legend: { display: true, labels: { color: '#004080' } },
            tooltip: { enabled: true }
        }
    }
});
