import {Router} from 'aurelia-router';

export class App {
	static inject() { return [Router]; }

	constructor(router) {
		this.router = router;

		this.router.configure(config => {
			config.map([
				{ route: '',      moduleId: 'weather', nav: true, title: 'Weather' },
				{ route: 'about', moduleId: 'about',   nav: true, title: 'About the Weather' }
			]);
		});
	}
}