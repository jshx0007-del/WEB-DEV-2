let h1 = document.querySelector("h1");
let startbtn = document.querySelector("#startBtn");
let pausebtn = document.querySelector("#pauseBtn");
let resetbtn = document.querySelector("#resetBtn");
let seconds = 0;
let minutes = 0;
let interval;
function startWatch(){
    interval =setInterval(() => {
        seconds++;
        minutes = Math.floor(seconds/60);
        h1.innerText = `${minutes}:${seconds%60}`;
    },1000)
}

function pauseWatch(){
    clearInterval(interval);
}
function resetWatch(){
    seconds = 0;
    h1.innerText = `${minutes}:${seconds}`;
}

startbtn.addEventListener('click', startWatch);
pausebtn.addEventListener('click', pauseWatch);
resetbtn.addEventListener('click', resetWatch);