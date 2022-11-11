async function getInfo() {
    const stopInfoElement = document.getElementById('stopId');
    const stopId = stopInfoElement.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`
    const stopNameElement = document.getElementById('stopName');
    const busList = document.getElementById('buses');

    busList.innerHTML = '';
    stopId.value = '';

    try {
        const response = await fetch(url);
        const data = await response.json();

        stopNameElement.textContent = data.name;
        Object.entries(data.buses).forEach(([bus, time]) => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus} arrives in ${time} minutes`
            busList.appendChild(liElement);
        });
    } catch (e) {
        stopNameElement.textContent = 'Error';
    }

}