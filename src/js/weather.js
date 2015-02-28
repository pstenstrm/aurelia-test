import {HttpClient} from 'aurelia-http-client';

var 
	url = 'http://api.openweathermap.org/data/2.5/weather?q=',
	self;

export class Weather {
	static inject() { return [HttpClient]; }

	constructor(http) {
		this.http = http;
		this.location = 'Paris';
		this.locations = [];

		self = this;
	}

	activate() {

	}

	search() {
		return this.http.get(url + this.location).then(response => {
			var
				cleanResponse = response.response.replace(/^"|"$/g, "'"),
				json = JSON.parse(cleanResponse);

			this.locations.push(json);
		});
	}

	closeCard() {
		self.locations.splice(self.locations.indexOf(this.weather), 1);
	}
}