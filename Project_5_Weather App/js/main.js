

const search = document.getElementById('submitButton');

search.addEventListener('click', () => {
    const ApiKey = ""
    const city = document.getElementById("searchBox").value;
    fetch('https://api.openweathermap.org/data/3.0/weather?q=${city}&units=metric&appid=${ApiKey')
});
