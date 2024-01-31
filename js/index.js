let hours = document.getElementsByClassName("hour")[0];
let minute = document.getElementsByClassName("minute")[0];
let second = document.getElementsByClassName("second")[0];

setInterval(function currentTime(){
    let now = new Date();
    let h = now.getHours() ;
    let m = now.getMinutes();
    let s = now.getSeconds();



console.log(h, scale(s, 0, 60, 0, 360));

    hours.style = `rotate: ${scale(h, 0, 24, 0, 360)}deg`;
    minute.style = `rotate: ${scale(m, 0, 60, 0, 360)-149}deg`;
    second.style = `rotate: ${scale(s, 0, 60, 0, 360)-149}deg`;


    function scale(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };  
}, 1000)



