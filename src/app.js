import { Header } from "./header"
import { Footer } from "./footer"
import { Table } from "./table";

export class App {
	constructor() {
		this.header = new Header();
		this.footer =  new Footer();

		this.table = new Table();
	}

	render() {
		let result = ''
		result += this.header.render();
		result += this.table.render();
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