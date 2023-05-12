fetch("https://type.fit/api/quotes").then(function(response) {
    return response.json();
}).then(function(data) {
    console.log();
    // console.log(data.length)
    document.getElementById("quote").innerText += Object.values(data[0])[0]
    document.getElementById("qouteBy").innerHTML += Object.values(data[0])[1]
    document.getElementById('loader').classList.add('hide-loader')
    document.getElementById('content').style.visibility = 'visible'

    document.getElementById('newQuote').addEventListener('click', function(){
        let i = Math.floor((Math.random() * data.length))
        document.getElementById("quote").innerText = Object.values(data[i])[0]
        document.getElementById("qouteBy").innerHTML = Object.values(data[i])[1]
    
    })

})








