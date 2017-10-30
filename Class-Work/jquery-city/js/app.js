// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

//$('#first').click(showFirst);

//function showFirst() {
	//$('#bigimage').attr('src', 'img/1.jpg');}

//$('#second').click(showSecond);

//function showSecond() {
	//$('#bigimage').attr('src', 'img/2.jpg');
//}

//$('#third').click(showThird);

//function showThird() {
	//$('#bigimage').attr('src', 'img/3.jpg')
//}

//$('#fourth').click(showFourth)

//function showFourth() {
//$('#bigimage').attr('src', 'img/4.jpg');
//}


//above code is for initial class exercise. Below is for using $(this)

$('.thumb').click(changeImage);

function changeImage() {
//1. get (store in a variable) this elements 'src'
var newImage = $(this).attr('src');
//2. update #bigimage's 'src' using the above variable
$('#bigimage').attr('src', newImage)


}