
function digitalClock(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
    let session = 'AM';
    
    if(h == 0){
        h =12;
    }
    if(h >12){
        h = h - 12;
        session = 'PM';
    }

    h = (h <10) ? '0' + h : h;
    m = (m <10) ? '0' + m : m;
    s = (s <10) ? '0' + s : s;


    document.getElementById('digitalClock').innerHTML = h + ":" + m + ":" + s + " " + session;
    setTimeout(digitalClock, 1000)
}

function analogClock(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
}

// analogClock()
digitalClock()