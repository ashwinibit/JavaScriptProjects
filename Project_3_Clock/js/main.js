
function digitalClock(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();

    document.getElementById('digitalClock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(getTodayTime, 1000)
}

function analogClock(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
}

analogClock()
// digitalClock()