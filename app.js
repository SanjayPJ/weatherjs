//init object
const weather = new Weather('Kollam', 'IN');
const ui = new UI();

//get weather on dom load
document.addEventListener('DOMContentLoaded', get_weather);

//change location event
document.getElementById('w-change-btn').addEventListener("click", () => {
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;
	weather.change_location(city, state);
	console.log(city, state);
	get_weather();

	//close modal
	$('#exampleModal').modal('hide');
});

//get the current weather
function get_weather(){
	weather.get_weather()
		.then(result => { 
			ui.paint(result);
		})
		.catch(err => console.log(err));
}