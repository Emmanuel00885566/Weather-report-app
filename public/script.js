
const API_URL = 'http://localhost:3000/api/weather';

        document.getElementById('weatherForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            const city = document.getElementById('city').value.trim();
            const spinner = document.getElementById('loadingSpinner');
            const resultDiv = document.getElementById('weatherResult');
            spinner.style.display = 'block';
            spinner.setAttribute('aria-busy', 'true');
            resultDiv.innerHTML = '';

            try {
                const response = await fetch(`${API_URL}?city=${city}`);
                if (!response.ok) throw new Error('City not found');
                const data = await response.json();

                // Display weather data
                resultDiv.innerHTML = `
                    <div class="weather-details">
                        <h2>${data.city || city}</h2>
                        <p><strong>Temperature:</strong> ${data.temperature ?? 'N/A'}°C</p>
                        <p><strong>Condition:</strong> ${data.condition ?? 'N/A'}</p>
                        <p><strong>Humidity:</strong> ${data.humidity ?? 'N/A'}%</p>
                        <p><strong>Wind Speed:</strong> ${data.windSpeed ?? 'N/A'} km/h</p>
                    </div>
                `;
            } catch (err) {
                resultDiv.innerHTML = `<p style="color:red;">Error fetching weather data. Please try again.</p>`;
            } finally {
                spinner.style.display = 'none';
                spinner.setAttribute('aria-busy', 'false');
            }
        });

        