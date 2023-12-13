// reference html elements
const imgBox = document.querySelector('.img-box');
const imgWrap = document.querySelector('.img-wrap');
const original = document.querySelector('#original');
const line = document.querySelector('#line');
let leftSpace = imgBox.offsetLeft;

original.style.width = imgBox.offsetWidth + "px";

imgBox.onmousemove = function(e) {
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}
