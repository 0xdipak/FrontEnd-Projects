const modalBox = document.getElementById('modalBox');

function showModal() {
    setTimeout(() => {
        modalBox.style.display = 'block';
    }, 3000)
}

function closeModal() {
    modalBox.style.display = 'none';
}