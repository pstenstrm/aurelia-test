import {Router} from 'aurelia-router';

export class App {
	static inject() { return [Router] }
	costructor(router) {
		this.router = router;

		this.router.configuration(config => {
			config.map([
				{ route: ['', 'weather'], moduleId: 'weather', nav: true },
				{ route: 'about',         moduleId: 'about',   nav: true }
			]);
		});
	}
}