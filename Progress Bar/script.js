const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circles');
const progress = document.querySelector('.progress');


let currentIndex = 1;
// EVENT

next.addEventListener('click', () => {
    currentIndex++;
    //BTN DISABLED
    if(currentIndex > circles.length ) {
        currentIndex = circles.length
    }
    update();
});

prev.addEventListener('click', () => {
    currentIndex--;
    //BTN DISABLED
    if(currentIndex < 1) {
        currentIndex = 1
    }

    update();
});

function update() {
    // BLUE CIRCLE
    circles.forEach((circle, index) => {
        if(index < currentIndex) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    // DISABLED PREV AND NEXT BUTTON
    if(currentIndex === 1 ) {
        prev.disabled = true;
    } else if (currentIndex === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

    //PROGRESS BAR
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length -1) * 100 + '%'
}

