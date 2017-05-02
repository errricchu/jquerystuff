$(document).ready(function() {
	$(".button1").on("click", function() {
		$("img").toggle();
	})

	$(".button2").on("click", function() {
		$("img").slideToggle();
	})

	$(".button3").on("dblclick", function() {
		$("img").fadeToggle();
	})

	$(".button4").on("dblclick", function() {
		$("h1").toggleClass("change")
	})

	$(".button5").on("click", function() {
		$("ul").append("<li>asdjf</li>");
	})

	$(".img2").hover(function() {
		$(".img2").animate({
			width: "150px"
		})
	})

	$("h2").hover(function() {
		$("h2").slideUp();
	})

	$(".last").hover(function() {
		$(this).fadeOut();
	})

	$(".button6").on("click", function() {
		$(".last").fadeIn();
	})

	$("h3").hover(function() {
		$("h3").toggleClass("font")
	})
});







