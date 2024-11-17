document.getElementById('madlib-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather inputs
    const data = {
        weather: document.getElementById('weather').value,
        adjective1: document.getElementById('adjective1').value,
        noun1: document.getElementById('noun1').value,
        landmark: document.getElementById('landmark').value,
        animal: document.getElementById('animal').value,
        verb1: document.getElementById('verb1').value,
        verb2: document.getElementById('verb2').value
        // Add more inputs here
    };

    // Save to local storage
    localStorage.setItem('madlibData', JSON.stringify(data));
    window.location.href = 'results.html';
});

if (window.location.pathname.endsWith('results.html')) {
    const data = JSON.parse(localStorage.getItem('madlibData'));
    const story = `
        在${data.weather}的重庆，我刚一下飞机，就被${data.adjective1}的空气和${data.noun1}味道包围了。
        走在${data.landmark}旁，我看见了一只${data.animal}正在${data.verb1}，这让我忍不住${data.verb2}了一下。
        ... (继续故事)
    `;
    document.getElementById('madlib-story').textContent = story;
}