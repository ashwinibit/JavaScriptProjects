let active = false
function toggle() {
    
    let toggle = document.querySelector('.toggle')
    let digClock = document.querySelector('.digitalClock')
    let anaClock = document.querySelector('.analogClock')
    let text = document.querySelector('.text')
    active = !active
    if (active) {
        toggle.classList.add('active')
        digClock.classList.add('shDis')
        anaClock.classList.remove('shDis')
        text.innerHTML = 'Digital'
        toggle.classList.add
    } else {
        toggle.classList.remove('active')
        anaClock.classList.add('shDis')
        digClock.classList.remove('shDis')
        text.innerHTML = 'Analog'

    }
}


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
    let hRotation = 30 * h + m / 2;
    let mRotation = 6 * m;
    let sRotation = 6 * s;
    document.getElementById('hour').style.transform = `rotate(${hRotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mRotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${sRotation}deg)`;
    setTimeout(analogClock, 1000)
}
toggle()
analogClock()
digitalClock()