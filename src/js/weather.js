import {HttpClient} from 'aurelia-http-client';

export class Weather {
	static inject() { return [HttpClient]; }
	configuration(http) {
		this.http = http;
	}

	activate() {
		
	}
}