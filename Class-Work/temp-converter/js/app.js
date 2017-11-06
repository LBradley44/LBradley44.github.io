//Create temp converter. Celcius to farenheit conversion.
//var fahrenheit = $('#fahrenheit').val(); **convert to fahrenheit
//var celcius = $('#celcius').val(); **convert to celcius

//var fahrenheit = celcius * 1.8 + 32;
//var celcius = (fahrenheit - 32) / 1.8;

$('#fahrenheit').change(convertFahrenheit);
$('#celsius').change(convertCelsius);

function convertFahrenheit () {
	var fahrenheit = $('#fahrenheit').val();
	celsius = (fahrenheit - 32) / 1.8;
	$('#fahrenheit').val(celsius);


	var celsius = $('#celsius').val();

}

function convertCelsius () {
	var celsius = $('#celsius').val();
	fahrenheit = celsius * 1.8 + 32;
	$('#celsius').val(fahrenheit);

	var fahrenheit = $('#fahrenheit').val();
}