$(document).ready(() => {
	$(".ul").on("click", event => {
		$(event.currentTarget).siblings().toggle("show");
	});



	//user details
	$('.createbutt').on("click", () => {
		$(".createacc").toggle();
	});
	$(".circle").on("mouseenter", event => {
		$(event.currentTarget).next().show("saveforlater");
	}).on("mouseleave", event => {
		$(event.currentTarget).next().hide("saveforlater");
	}).on("click", () => {
		$(event.currentTarget).toggleClass("red")
	});









});
