const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('container');
const ratingContainerEl = document.getElementById("ratings-container");
const ratingEls = document.querySelectorAll('.rating');

let selectedRating = '';


ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener('click', (event) => {
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add('active');
        event.target.parentNode.classList.add('active');
    });
});

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove('active');
    })
}


btnEl.addEventListener('click', () => {
    if(selectedRating !== "") {
        containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }
})