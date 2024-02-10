// GET REQUIRED LIBRARIES
import { VueFormApplication } from '../lib/fvtt-vue.js';

// GET MODULE CORE
import { MODULE } from '../_module.mjs';

// GET COMPONENTS
import { Configure } from '../components/configure.js';


export class ConfigureApp extends VueFormApplication {
	constructor(options) { super(options); }
	
	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			title: `${MODULE.TITLE} | ${MODULE.localize('configure.title')}`,
			id: `${MODULE.ID}-configure`,
			classes: [],
			width: window.innerWidth > 1000 ? 1000 : window.innerWidth + 100,
			//width: window.innerWidth + 100,
			height: "auto",
			resizable: true,
			component: Configure
		});
	}
}
