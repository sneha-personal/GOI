const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");
readMoreBtn.addEventListener("click", (e) => {
text.classList.toggle("show-more");
if (readMoreBtn.innerText  === "LEARN LESS") {
readMoreBtn.innerText="Learn More";
} else {
readMoreBtn.innerText="Learn Less";
}
});


