const textbox = document.getElementById('textbox');
const imgBox = document.getElementById('imgBox');

textbox.onkeyup = textbox.onkeypress = function() {
    document.getElementById("prevText").innerHTML = this.value;
}

const loadFile = function(event) {
    imgBox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")"
}