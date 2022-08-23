/* No zooming START */

window.addEventListener('wheel', (event) => {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, {
    "passive": false
});


document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }  
});

/* No zooming END */