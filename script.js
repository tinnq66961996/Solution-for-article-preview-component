"use strict";

// Select the element with the class "icon-container"
const btn = document.querySelector(".icon-container");

// Add click event listener to the "btn" element
btn.addEventListener("click", function () {
    // Select the element with the class "shape"
    const shape = document.querySelector(".shape");

    // Toggle the "active" class on the "shape" element
    shape.classList.toggle("active");
});
