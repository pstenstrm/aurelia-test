import {Behavior} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

var
	url = 'http://restcountries.eu/rest/v1/alpha/';

export class WeatherCard {
	static inject() { return [HttpClient]; }

	static metadata(){ return Behavior.withProperty('weather').withProperty('destroy'); }

	constructor(http) {
		this.http = http;
		this.countryName;

		console.log(this);

		this.getCountryName();
	}

	get celcius() {
		return Math.round(`${this.weather.main.temp}` - 273.15);
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

	get color() {
		var 
			key = 'cold';

		if(this.celcius > 20) {
			key = 'warmer';
		} else if(this.celcius > 10) {
			key = 'warm';
		}

		return key;
	}

	getCountryName() {
		var
			self = this;

		setTimeout(function() {
			if(`${self.weather.sys.country}`.length > 2) {
				
				self.countryName = `${self.weather.sys.country}`;
				return;
			}

			self.http.get(url + `${self.weather.sys.country}`).then(response => {
				var
					cleanResponse = response.response.replace(/^"|"$/g, ''),
					json = JSON.parse(cleanResponse);

				self.countryName = json.name;
			});
		}, 0);
	}
}