const boxs = document.querySelectorAll(".boxes");

window.addEventListener('scroll', checkBoxs);


checkBoxs();

function checkBoxs() {
    const triggerHeight = window.innerHeight / 5 * 4;
    
    boxs.forEach(box => {
        
        const topBox = box.getBoundingClientRect().top;
        
        if(topBox < triggerHeight) {
            box.classList.add('show');
        } else {
            box.classList.remove("show");
        }
    })
}