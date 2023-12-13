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

// Behind the scenes, we are layering two similar images
// When we move the mouse, we're changing the size of one image
// container over the another

imgBox.onmousemove = function(e) {
    // e.pageX tracks the x coordinate of the mouse on the page
    // specifically, while over the img-box element

    // Every time the mouse moves over the img-box,
    // the width of the element is set to that coordinate,
    // minus the empty space to account for offset
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;

    // the cursor's absolute left position is also
    // set to the same width to look like a cursor
    line.style.left = boxWidth;
}
