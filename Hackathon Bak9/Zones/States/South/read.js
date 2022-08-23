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

// $('.read-more-btn').click( function(){
	
// 	$dots = $(this).siblings('.text').children('.dots');
// 	$moretext = $(this).siblings('.text').children('.moreText');

	
// 	if($(this).text() == 'Learn More') {
// 		$dots.hide();
// 		$moretext.show();
// 		$(this).text("Learn Less");
// 	} else {
// 		$dots.show();
// 		$moretext.hide();
// 		$(this).text("Learn More");
// 	}
// });


