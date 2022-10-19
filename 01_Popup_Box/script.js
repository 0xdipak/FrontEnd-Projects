const modalBox = document.getElementById("modalBox");

document.onmouseleave = function() {
    modalBox.style.display = "block";
}

function closeModel() {
    modalBox.style.display = "none";
}