$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
	})
})

$('#burger').click(showMenu)

function showMenu () {
	$('#mobile-nav').slideToggle()
	//above - .slideToggle allows you to click burger to show and click again to unshow
	//to just show content on click w/o clearing you'd use .show()
}