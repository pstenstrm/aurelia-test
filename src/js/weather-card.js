import {Behavior} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

var
	url = 'http://restcountries.eu/rest/v1/alpha/';

export class WeatherCard {
	static inject() { return [HttpClient]; }

	static metadata(){ return Behavior.withProperty('weather').withProperty('destroy'); }

	constructor(http) {
		this.http = http;
		this.countryName = null;

		console.log(this);

		this.getCountryName();
	}

	get celcius() {
		return ~~(`${this.weather.main.temp}` - 273.15);
	}

	get location() {
		return `${this.weather.name}`;
	}

	get icon() {
		return this.weather.weather[0].icon;
	}

	get description() {
		return this.weather.weather[0].description;
	}

	getCountryName() {
		var
			self = this;

		setTimeout(function() {
			self.http.get(url + `${self.weather.sys.country}`).then(response => {
				var
					cleanResponse = response.response.replace(/^"|"$/g, ''),
					json = JSON.parse(cleanResponse);

				self.countryName = json.name;
			});
		}, 0);
	}
}