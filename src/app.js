import { Header } from "./header"
import { Footer } from "./footer"
import { Table } from "./table";
import { ConfigEditor } from "./config-editor";
import { Utils } from "./utils";
import { Storage } from "./storage";

const APP_NAME = 'TEMPLATE';

export class App {
	constructor() {
		this.components = [];
		this.header = new Header(APP_NAME);
		this.footer =  new Footer();

		this.table = new Table(this.callback.bind(this));
		this.configEditor = new ConfigEditor('CONFIG', this.callback.bind(this))
		this.importExport = new ConfigEditor('IMPORT/EXPORT')
		
		this.components.push(this.table)
		this.components.push(this.configEditor)
		this.components.push(this.importExport)

		this.storage = new Storage();
		this.config = this.storage.get('config');
	}

	render() {
		let result = ''
		result += this.header.render();
		result += '<main class="container">'
		this.components.forEach(component => {
			result += component.render();
		})
		result += '</main>'
		result += this.footer.render();
		return result;
	}

	run() {
		this.updateConfig(this.config);
		this.configEditor.run();
	}

	updateConfig(config) {
		this.config = config;
		let lines = config.split('---');
		let data = [];
		lines.forEach(e => {
			let line = {title:e};
			data.push(line);

		})
		this.table.setData(data);
		this.storage.set('config', this.config);
	}

	callback(message, data) {
		
		let result = null;

		switch (message) {
			case 'table':
				Utils.showSuccess(data);
				break;
			case 'config-change':
				console.log(data)
				if (data != null){
					//let json = JSON.parse(data)
					//console.log(json);
					this.updateConfig(data);
				}				
				break;
			case 'load-config':
				return this.config;
		}

		return result;
	}
}