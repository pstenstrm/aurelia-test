import {Behavior} from 'aurelia-framework';

export class WeatherCard {
	static metadata(){ return Behavior.withProperty('weather'); }

	constructor(weather) {
		console.log(this);
	}

	get celcius() {
		return ~~(`${this.weather.main.temp}` - 273.15);
	}

	get location() {
		return `${this.weather.name}`;
	}
}