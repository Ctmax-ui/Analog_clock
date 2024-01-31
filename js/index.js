let hours = document.getElementsByClassName("hour")[0];
let minute = document.getElementsByClassName("minute")[0];
let second = document.getElementsByClassName("second")[0];

setInterval(function currentTime(){
    let now = new Date();
    let h = now.getHours() % 12;
    let m = now.getMinutes();
    let s = now.getSeconds();



console.log(s, scale(s, 0, 60, 0, 360));

    hours.style = `rotate: ${scale(h, 0, 11, 0, 180)-30}deg`;
    minute.style = `rotate: ${scale(m, 0, 60, 0, 360)-149}deg`;
    second.style = `rotate: ${scale(s, 0, 60, 0, 360)-149}deg`;


    function scale(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };  
}, 1000)



