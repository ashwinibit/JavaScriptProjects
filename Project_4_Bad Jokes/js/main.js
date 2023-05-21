
function newJoke(){
    document.getElementById('jokePart').innerHTML = "";
    document.querySelector('.loader').classList.remove("hide-loader");
    document.querySelector('.container').classList.add("addBlur");
    let apiUrl = fetch('https://icanhazdadjoke.com/',{
        // request header
        headers:{
            'Accept': 'application/json'
        }
    });
    apiUrl.then((val1) => {
        return val1.json()
    }).then((val2) => {
        console.log(val2.joke);
        document.querySelector('.loader').classList.add("hide-loader");
        document.querySelector('.container').classList.remove("addBlur");
        document.getElementById('jokePart').innerHTML = val2.joke;
    })
}