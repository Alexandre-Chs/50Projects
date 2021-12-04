const load = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}


let counter = 0;
let int = setInterval(blurring, 70);

function blurring() {
    load.innerText = `${counter}%`;
    counter++;

    if(counter > 100) {
        clearInterval(int)
    }

    load.style.opacity = scale(counter, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(counter, 0, 100, 30, 0)}px)`
}
