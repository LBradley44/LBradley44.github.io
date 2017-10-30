var total = 0;

// click on #a10

$('#a10').click(add10);

function add10 () {
// add 10 to 'total'
// output updated 'total' to #out

	total = total + 10;
	$('#out').html(total);
}

$('#a20').click(add20);

function add20 () {
	total = total + 20;
	$('#out').html(total);
}

$('#a30').click(add30);

function add30 () {
	total = total + 30;
	$('#out').html(total);
}

$('#n10').click(sub10);

function sub10 () {
	total = total - 10;
	$('#out').html(total);
}

$('#n20').click(sub20);

function sub20 () {
	total = total - 20;
	$('#out').html(total);
}

$('#n30').click(sub30);

function sub30 () {
	total = total - 30;
	$('#out').html(total);
}



$('#red').click(red)

function red () {
	$('#out').css('background-color', 'red');
}

$('#blue').click(blue)

function blue () {
	$('#out').css('background-color', 'blue');
}

$('#out').click(clear)

function clear () {
	total = 0;
	$('#out').css('background-color', 'white');
	$('#out').html(total)
}