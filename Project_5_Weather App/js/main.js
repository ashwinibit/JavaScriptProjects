

const search = document.getElementById('submitButton');

search.addEventListener('click', () => {
    const ApiKey = "9739a21be4db4fee0d1da331a511bc5b"
    const city = document.getElementById("searchBox").value;
    fetch('https://api.openweathermap.org/data/3.0/weather?q=${city}&units=metric&appid=${ApiKey')
});