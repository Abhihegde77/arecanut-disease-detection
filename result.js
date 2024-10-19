document.addEventListener('DOMContentLoaded', () => {
    const resultsList = document.getElementById('results-list');

    // Simulated previous detection results
    const previousResults = [
        {
            id: 1,
            date: '2023-05-15',
            disease: 'Leaf Spot',
            confidence: 0.89,
            image: '/3.jpeg',
            recommendations: [
                'Apply fungicide every 14 days',
                'Improve air circulation around plants',
                'Remove and destroy infected leaves'
            ]
        },
        {
            id: 2,
            date: '2023-05-10',
            disease: 'Yellow Leaf Disease',
            confidence: 0.76,
            image: '/7.jpeg',
            recommendations: [
                'Apply insecticide to control vector insects',
                'Ensure proper nutrient management',
                'Remove and destroy infected plants'
            ]
        }
    ];

    function displayResults(results) {
        resultsList.innerHTML = '';
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <img src="${result.image}" alt="Detected Disease">
                <h3>${result.disease}</h3>
                <p>Date: ${result.date}</p>
                <p>Confidence: ${result.confidence.toFixed(2)}</p>
                <h4>Recommendations:</h4>
                <ul>
                    ${result.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                </ul>
            `;
            resultsList.appendChild(resultItem);
        });
    }

    // Display the simulated results
    displayResults(previousResults);
});
// Replace the simulated results with this
const previousResults = db.getDetectionResults(currentUser.id);
displayResults(previousResults);