import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { Table } from "./components/table";
import { ConfigEditor } from "./components/config-editor";
import { Utils } from "./components/utils";
import { Storage } from "./components/storage";
import { ImportExport } from "./components/import-export";
import { Toolbar } from "./components/toolbar";
import { CheckboxList } from "./components/checkbox-list";

const APP_NAME = 'TEMPLATE';

export class App {
	constructor() {
		this.components = [];
		this.header = new Header(APP_NAME);
		this.footer =  new Footer();
		this.toolbar = new Toolbar('BTN1|BTN2|BTN3', this.callback.bind(this));
		this.table = new Table(this.callback.bind(this));
		this.configEditor = new ConfigEditor('CONFIG', this.callback.bind(this))
		this.importExport = new ImportExport('IMPORT/EXPORT', this.callback.bind(this))
		this.checkboxList = new CheckboxList('CHECKBOX LIST', this.callback.bind(this));

		this.components.push(this.toolbar)
		this.components.push(this.checkboxList)
		this.components.push(this.table)
		this.components.push(this.configEditor)
		this.components.push(this.importExport)

		this.storage = new Storage();
		this.config = this.storage.get(APP_NAME + '_config', '');
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
		this.components.forEach(component => {
			component.run();
		})
	this.updateConfig(this.config);
	this.callback('run', null);
	}

	updateConfig(config) {
		this.config = config;

		if (config == null)
			return

		let lines = config.split('---');
		let data = [];
		lines.forEach(e => {
			let line = {title:e};
			data.push(line);

		})
		this.table.setData(data);
		this.configEditor.setText(this.config);
		this.importExport.setText(Utils.encodeUnicodeToBase64(this.config));
		this.storage.set(APP_NAME + '_config', this.config);
		
	}

	callback(message, data) {
		
		let result = null;


		switch (message) {
			case 'run':
				this.checkboxList.addCheckbox('CHECKBOX 1', 'CHECKBOX 1');
				this.checkboxList.addCheckbox('CHECKBOX 2', 'CHECKBOX 2');
				this.checkboxList.addCheckbox('CHECKBOX 3', 'CHECKBOX 3');	
				break;
			case 'toolbar':
				switch (data) {
					case 'BTN1':
						this.checkboxList.addCheckbox(Utils.randomClassName(), Utils.randomClassName());
						Utils.showSuccess('BTN1');
						break;
					case 'BTN2':
						Utils.showSuccess('BTN2');
						break;
				}
				break
			case 'checkbox-list':
				console.log(data);
				break;
			case 'table':
				Utils.showSuccess(data);
				break;

			case 'config-change':		
				if (data != null){
					this.updateConfig(data);
				}				
				break;

			case 'config-load':
				return this.config;
				break;
			
			case 'import':
				this.updateConfig(Utils.decodeBase64ToUnicode(data));
				this.configEditor.setText(this.config);
				break;
			
			case 'export':
				return Utils.encodeUnicodeToBase64(this.config);
				break;
		}

		return result;
	}
}