const focus = document.getElementById('focus');
const focusHW = focus.offsetWidth/2;

document.onmousemove = function(e) {
    focus.style.left = e.pageX - focusHW + "px";
    focus.style.top = e.pageY - focusHW + "px";
}