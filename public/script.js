const API_URL = 'http://localhost:3000/api/weather';

document.getElementById('weatherForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const city = document.getElementById('city').value.trim();
    const spinner = document.getElementById('loadingSpinner');
    const resultDiv = document.getElementById('weatherResult');

    
    spinner.style.display = 'block';
    spinner.setAttribute('aria-busy', 'true');
    resultDiv.innerHTML = '';

    try {
        const response = await fetch(`${API_URL}?city=${city}`);
        const data = await response.json();

        if (!response.ok || data.error) {
            
            resultDiv.innerHTML = `<p style="color:red;">${data.error || 'Error fetching weather data.'}</p>`;
        } else {
          
            resultDiv.innerHTML = `
  <div class="weather-details">
      <h2>${data.city || city}</h2>
      <p><strong>Temperature:</strong> ${data.temperature ?? 'N/A'}</p>
      <p><strong>Precipitation:</strong> ${data.precipitation ?? 'N/A'}</p>
      <p><strong>Wind:</strong> ${data.wind ?? 'N/A'}</p>
      <p><strong>Humidity:</strong> ${data.humidity ?? 'N/A'}</p>
      <p><strong>Weather:</strong> ${data.weather ?? 'N/A'}</p>
      <p><strong>Sunrise:</strong> ${data.sunrise ?? 'N/A'}</p>
      <p><strong>Sunset:</strong> ${data.sunset ?? 'N/A'}</p>
      <p><strong>Pressure:</strong> ${data.pressure ?? 'N/A'}</p>
  </div>
`;


        }
    } catch (err) {
        resultDiv.innerHTML = `<p style="color:red;">Failed to connect to server. Please try again later.</p>`;
    } finally {
        spinner.style.display = 'none';
        spinner.setAttribute('aria-busy', 'false');
    }
});
