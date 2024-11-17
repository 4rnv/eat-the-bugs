window.onload(
    getResponse(),
    sendData()
);

async function getResponse() {
	const response = await fetch(
		'https://ip-api.com/json/?fields=status,message,country,regionName,city,lat,lon,query',
		{
			method: 'GET',
		}
	);
    const data = await response.json();
	//console.log(data);
    sendData(data);
}

function sendData(data) {
    var ip = document.getElementById('IP');
    var info = document.getElementById('info');
    ip.innerHTML = `${data.query}`;
    info.innerHTML = `<p>How is ze weather in ${data.lat} ${data.lon}<br>${data.city},${data.regionName},${data.country}?<p>`;
}
