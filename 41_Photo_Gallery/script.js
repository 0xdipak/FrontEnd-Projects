const errorMessage = document.getElementById("errorMessage");
const btnEl = document.getElementById("btn");
const galleryEl = document.getElementById("gallery");


 async function  fetchImage() {
    const inputValue = document.getElementById("input").value;

    if(inputValue > 10 || inputValue < 1) {
        errorMessage.style.display = 'block';
        galleryEl.style.display = "none";
        return
    }

    imgs = "";


    try {
        btnEl.style.display = 'none';
        const loading = `<img src="spinner.svg" />`;
        galleryEl.innerHTML = loading;
        await fetch(
          `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.floor(Math.random() * 1000)}&client_id=963W0a-yvn6yWmF_6wzTm38Y0wMEK6S8CG49psfDLTc`
        ).then((res) =>
          res.json().then((data) => {
            if(data) {
                data.forEach((pic) => {
                    imgs += `<img src=${pic.urls.small} />`;
                    galleryEl.style.display = "block";
                    galleryEl.innerHTML = imgs;
                    btnEl.style.display = "block";
                    errorMessage.style.display = "none";
                });
            }
          })
        );

    
    }catch(error) {
        errorMessage.style.display = 'block'
        errorMessage.innerHTML = "An error happended, try again later";
         btnEl.style.display = "block";
         galleryEl.style.display = "none";
    }
    
}


btnEl.addEventListener('click', fetchImage);