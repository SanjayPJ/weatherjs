class Weather{
	constructor(city, state){
		this.api_key = '835d571a0c58b7c674753c969fa4b87e';
		this.city = city;
		this.state = state;
	}
	//Fetch weather from API
	async get_weather(){
		const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.api_key}&units=metric`);
		const response_data = await response.json();
		return response_data;
	}
	change_location(city, state){
		this.city = city;
		this.state = state;
	}
}