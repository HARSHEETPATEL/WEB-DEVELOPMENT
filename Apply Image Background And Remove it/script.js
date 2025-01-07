const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img_wrap");
const originalImg = document.getElementById("originalImg");
const line = document.getElementById("line");

// Set the original image width equal to the img-box width
originalImg.style.width = imgBox.offsetWidth + "px";

// Calculate the left offset of the img-box
const leftSpace = imgBox.getBoundingClientRect().left;

// Adjust image wrap width and move the line based on mouse movement
imgBox.onmousemove = function (e) {
    const boxWidth = e.pageX - leftSpace;
    
    // Update img_wrap width
    imgWrap.style.width = boxWidth + "px";
    
    // Update the position of the line (arrow)
    line.style.left = boxWidth + "px";
};
