const jokesText = document.getElementById('joke');
const btn = document.getElementById('jokesBtn');

generateJoke();
btn.addEventListener('click', generateJoke);

async function generateJoke() {

    const config = {
        headers: {
            'Accept': 'application/json',
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokesText.innerHTML = data.joke;

}

