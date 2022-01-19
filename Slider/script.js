const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activesSlide = 0;
setBgToBody();


rightBtn.addEventListener('click', () => {
    activesSlide++

    if(activesSlide > slides.length -1) {
        activesSlide = 0
    } 

    setBgToBody();
    setActiveSlide();
})

leftBtn.addEventListener('click', () => {
    activesSlide--

    if(activesSlide < 0) {
        activesSlide = slides.length - 1
    } 

    setBgToBody();
    setActiveSlide();
})


function setBgToBody() {
    body.style.backgroundImage = slides[activesSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })

    slides[activesSlide].classList.add('active');
}