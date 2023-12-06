var daysEl = document.getElementById('days')
var hoursEl = document.getElementById('hours')
var minutesEl = document.getElementById('minutes')
var secondsEl = document.getElementById('seconds')

function countdownTimer() {
    const countDownDate = new Date('1/01/2024').getTime();

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance <= 0) {
            document.getElementById('headline').innerText = 'Meet our car';
            document.getElementById('countdown').style.display = 'none';
            clearInterval(interval);
        } else {
            daysEl.innerText = formatNumber(Math.floor(distance / day));
            hoursEl.innerText = formatNumber(Math.floor((distance % day) / hour));
            minutesEl.innerText = formatNumber(Math.floor((distance % hour) / minute));
            secondsEl.innerText = formatNumber(Math.floor((distance % minute) / second));
        }
    }

    updateCountdown(); // Call once to set initial values

    // Calculate every second
    const interval = setInterval(updateCountdown, 1000);
}

    

function formatNumber(number){
    if(number <10){
        return '0' + number
    }
    return number
}

countdownTimer()



const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

const stats = document.querySelector('.stats');
const counters = document.querySelectorAll(".counter");
let bol = false;


const sectionOffset = stats.offsetTop + stats.offsetHeight;

window.addEventListener("scroll",() =>{
    const pageOffset = window.innerHeight + pageYOffset;


    if(pageOffset > sectionOffset && bol === false){
        counters.forEach((counter) => {
            function updateCount(){
                const target = +counter.getAttribute('data-target');
                const speed = +counter.getAttribute('data-speed');
                const count = +counter.innerText;


                if(count < target){
                    counter.innerText = count +1;

                    setTimeout(updateCount,speed);
                }else{
                    
                    counter.innerText=target;
                }
            }
            updateCount();

            bol=true;
        });
    }
});