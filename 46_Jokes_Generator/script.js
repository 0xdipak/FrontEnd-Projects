const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');



// Create a account on https://api-ninjas.com/api/dadjokes and use your api key below :

const API_KEY = "YOUR_API_KEY";
const API_URL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: 'GET',
    headers: {
        "X-Api-Key": API_KEY,
    }
}




 async function getJoke() {

    try {
        jokeEl.innerText = "updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(API_URL, options);
        const data = await response.json();
        // console.log(data);

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        jokeEl.innerText = data[0].joke;

    }
    catch(err) {
        jokeEl.innerText = "failed to update...";
    }

    
}

btnEl.addEventListener('click', getJoke);