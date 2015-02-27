import {HttpClient} from 'aurelia-http-client';

var 
	url = 'http://api.openweathermap.org/data/2.5/weather?q=';

export class Weather {
	static inject() { return [HttpClient]; }

	constructor(http) {
		this.http = http;
		this.location = 'Paris';
		this.weather= [];
	}

	activate() {

	}

	search() {
		return this.http.jsonp(url + this.location).then(response => {
			this.weather.push(response);
		});
	}
}