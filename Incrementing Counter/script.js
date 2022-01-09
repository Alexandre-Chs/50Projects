const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = 0;

    const updateCounter = () => {
        // Ce que je dois obtenir
        const target = +counter.getAttribute('data-target');
        //Affiche le nombre en direct
        const c = +counter.innerText;

        const increment = target / 200;
        console.log(increment)
        if( c < target ) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter,1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})