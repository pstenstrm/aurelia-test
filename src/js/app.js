import {Router} from 'aurelia-router';

export class App {
	static inject() { return [Router]; }

	constructor(router) {
		this.router = router;

		this.router.configure(config => {
			config.map([
				{ route: ['', 'weather'], moduleId: 'weather', nav: true },
				{ route: 'about',         moduleId: 'about',   nav: true }
			]);
		});
	}
}