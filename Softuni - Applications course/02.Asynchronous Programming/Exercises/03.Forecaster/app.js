const enumIcon = {
    'Sunny': '&#x2600',
    'Partly sunny': '&#x26C5',
    'Overcast': '&#x2601',
    'Rain': '&#x2614',
    'Degrees': '&#176'

}
const forecastContainer = document.getElementById('forecast');
function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeather);


}

async function getWeather() {
    const url = `http://localhost:3030/jsonstore/forecaster/locations`;
    const townName = document.getElementById('location').value;
    // try{
        const response = await fetch(url);
        const data = await response.json();
    
        const info = data.find(x => x.name === townName);
    
        createForecaster(info.code);
    // } catch{
    //     forecastContainer.style.display = 'block';
    //     forecastContainer.textContent = 'Error';
    // }
  
}

async function createForecaster(code) {
    const currentSection = document.getElementById('current');
    const upcommingContainer = document.getElementById('upcoming');
    // const forecastSection = document.querySelector('#forecast ')

    const todayUrl = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
    const threeDayUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;


    // try {
        const responseToday = await fetch(todayUrl);
        const dataToday = await responseToday.json();

        const responseThreeDay = await fetch(threeDayUrl);
        const dataThreeDay = await responseThreeDay.json();

        forecastContainer.style.display = 'block';
        const todayHTMLTemp = createToday(dataToday);
        currentSection.appendChild(todayHTMLTemp);

        const upcomingHTMLTemp = createUpcomming(dataThreeDay);
        upcommingContainer.appendChild(upcomingHTMLTemp);
    // } catch {
    //     forecastContainer.style.display = 'block';
    //     forecastContainer.textContent = 'Error';
    // }

}

function createUpcomming(data) {
    const container = document.createElement('div');
    container.classList.add('forecast-info');

    data.forecast.forEach(data => {
        const spanHolder = generateSpans(data);
        container.appendChild(spanHolder);
    });

    return container;
}

function generateSpans(data) {
    const { condition, high, low } = data;
    const spanHolder = document.createElement('span');
    spanHolder.classList.add('upcoming');

    const iconSpan = document.createElement('span');
    iconSpan.classList.add('symbol');
    iconSpan.innerHTML = enumIcon[condition];

    const degreesSpan = document.createElement('span');
    degreesSpan.classList.add('forecast-data');
    degreesSpan.innerHTML = `${low}${enumIcon['Degrees']}/${high}${enumIcon['Degrees']}`;

    const dataSpan = document.createElement('span');
    dataSpan.classList.add('forecast-data');
    dataSpan.textContent = condition;

    spanHolder.appendChild(iconSpan);
    spanHolder.appendChild(degreesSpan);
    spanHolder.appendChild(dataSpan);

    return spanHolder;
}

function createToday(data) {
    const { condition, high, low } = data.forecast;
    const div = document.createElement('div');
    div.classList.add('forecasts');

    const iconSpan = document.createElement('span');
    iconSpan.classList.add('condition');
    iconSpan.classList.add('symbol');
    iconSpan.innerHTML = enumIcon[condition];

    const conditionSpan = document.createElement('span');
    conditionSpan.classList.add('condition');

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('forecast-data');
    nameSpan.textContent = data.name;

    const degreesSpan = document.createElement('span');
    degreesSpan.classList.add('forecast-data');
    degreesSpan.innerHTML = `${low}${enumIcon['Degrees']}/${high}${enumIcon['Degrees']}`;

    const weatherSpan = document.createElement('span');
    weatherSpan.classList.add('forecast-data');
    weatherSpan.textContent = condition;

    div.appendChild(iconSpan);
    conditionSpan.appendChild(nameSpan);
    conditionSpan.appendChild(degreesSpan);
    conditionSpan.appendChild(weatherSpan);
    div.appendChild(conditionSpan);
    return div;
}
attachEvents();