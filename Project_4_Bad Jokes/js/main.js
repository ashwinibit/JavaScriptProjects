
function newJoke(){
    // fetch('https://icanhazdadjoke.com/',{
    //     headers:{
    //         'Accept': 'application/json'
    //     }

    // }).then(function(response){
    //     console.log(response)
    //     return response.json()
    // }).then(function(data){
    //     console.log(data)
    // })

    let apiUrl = fetch('https://icanhazdadjoke.com/',{
        // request header
        headers:{
            'Accept': 'application/json'
        }
    });
    apiUrl.then((val1) => {
        return val1.json()
    }).then((val2) => {
        console.log(val2.joke)
    })
}