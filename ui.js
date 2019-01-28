class UI{
	constructor(){
		this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.details = document.getElementById('w-details');
		this.humidity = document.getElementById('w-humidity');
		this.pressure = document.getElementById('w-pressure');
		this.wind = document.getElementById('w-wind');
	}
	convert(degree) {
		return degree * 9 / 5 + 32;
	}
	paint(weather){
		console.log(weather);
		this.location.innerHTML = weather.name + ", " + weather.sys.country;
		this.desc.innerHTML = weather.weather[0].description;
		this.string.innerHTML = weather.main.temp + " C (" + this.convert(weather.main.temp) + ' F)';
		this.humidity.innerHTML = `Relative humidity : ${weather.main.humidity}%`;
		this.pressure.innerHTML = `Pressure : ${weather.main.pressure}hPa`;
		this.wind.innerHTML = `Wind Speed : ${weather.wind.speed}mps`;
	}
}