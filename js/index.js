let hours = document.getElementsByClassName("hour")[0];
let minute = document.getElementsByClassName("minute")[0];
let second = document.getElementsByClassName("second")[0];

let digitalTime = document.querySelector(".digital-time");
let digitalMonth = document.querySelector(".digital-date");


const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = [
    'Jan', 'Feb', 'March', 'April',
    'May', 'June', 'July', 'Aug',
    'Sept', 'Oct', 'Nov', 'Dec'];

setInterval(function currentTime() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let month = now.getMonth();
    let week = now.getDay();
    let date = now.getDate();
    let amorpm = h <= 12 ? "AM" : "PM";


    digitalTime.innerText = `${h % 12}:${m < 10 ? `0${m}` : m} ${amorpm}`
    digitalMonth.innerHTML = `${weekNames[week]}, ${monthNames[month]} <span>${date< 10 ? `0${date}` : date}</span>`

    hours.style = `transform: rotateZ(${scale(h % 12, 0, 12, 0, 359)}deg);`;
    minute.style = `transform: rotateZ(${scale(m, 0, 59, 0, 359)}deg);`;
    second.style = `transform: rotateZ(${scale(s, 0, 60, 0, 360)}deg);`;


    function scale(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
}, 1000)



let modeChangerBtn = document.getElementById("theme-changer");

modeChangerBtn.addEventListener("click" ,colorChanger);

function colorChanger(){

    modeChangerBtn.classList.toggle("bg-white")
    modeChangerBtn.classList.toggle("text-dark")
    document.body.classList.toggle("bg-dark")

    document.querySelector(".main-heading").classList.toggle("text-white")
    document.querySelector(".slider").classList.toggle("border-dark")
    document.querySelector(".text-change-theme").classList.toggle("text-white")
    document.querySelector(".date-time-box").classList.toggle("border-white")
    document.querySelector(".digital-time").classList.toggle("text-white")
    document.querySelector(".digital-date").classList.toggle("text-white")
    document.querySelector(".clock-outer-circle").classList.toggle("border-white")
    document.querySelector(".clock-dial").classList.toggle("border-white")
    document.querySelector(".center-of-circle").classList.toggle("bg-white")

    let allIcon = document.querySelectorAll(".clock-outer-circle i")
    allIcon.forEach(e=> {
        e.classList.toggle("text-white");
    });
    document.querySelector(".hour").classList.toggle("border-white")
    document.querySelector(".minute").classList.toggle("border-white")
    document.querySelector(".second").classList.toggle("bg-white")
    document.querySelector(".second").classList.toggle("neon-bg")
    

}

