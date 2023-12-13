// reference html elements
const imgBox = document.querySelector('.img-box');
const imgWrap = document.querySelector('.img-wrap');
const original = document.querySelector('#original');
const line = document.querySelector('#line');

// This is the distance from the top-left corner of the current element
// from the left edge of the parent element
let leftSpace = imgBox.offsetLeft;

// This is the width of the current element, margin excluded
original.style.width = imgBox.offsetWidth + "px";

imgBox.onmousemove = function(e) {
    // e.pageX tracks the x coordinate of the mouse on the page
    // specifically, while over the img-box element
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}
