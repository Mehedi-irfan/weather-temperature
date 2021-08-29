const searchButton = () => {
    const inputField = document.getElementById('inputField');
    const inputText = inputField.value;
    inputField.value = '';
    if (inputText == '') {
        alert('Please Enter Your City');
    } else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=8dd42c831d116837a85675f4cd65c4a6`
        fetch(url)
            .then(res => res.json())
            .then(data => dispalyTemparature(data))
    }
}
const dispalyTemparature = data => {
    console.log(data);
    const temper = data.main.temp;
    const temperature = temper - 273.15;
    const dataTemp = temperature.toFixed(2);
    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
        <h2>${data.name}</h2>
        <h3>${dataTemp}&deg;C</h3>
        <h1>${data.weather[0].main}</h1>
    `
}