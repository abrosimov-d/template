import { Header } from "./header"
import { Footer } from "./footer"
import { Table } from "./table";
import { ConfigEditor } from "./config-editor";

const APP_NAME = 'TEMPLATE';

export class App {
	constructor() {
		this.components = [];
		this.header = new Header(APP_NAME);
		this.footer =  new Footer();

		this.table = new Table();
		this.configEditor = new ConfigEditor('CONFIG')
		this.importExport = new ConfigEditor('IMPORT/EXPORT')
		
		this.components.push(this.table)
		this.components.push(this.configEditor)
		this.components.push(this.importExport)
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
		const data = [
			{ id: 1, name: 'John', age: 25, city: 'New York' },
			{ id: 2, name: 'Alice', age: 30, city: 'London' },
			{ id: 3, name: 'Bob', age: 28, city: 'Paris' }
		];
		this.table.setData(data);
	}
}