import { Utils } from "./utils";

export class Table {
	constructor(callback) {
		this.element = null;
		this.className = Utils.randomClassName(12);
		//this.columns = columns;
		//this.omClick
		this.callback = callback
	}

	render() {
		return `<table class='${this.className}'></table>`
	}

	setData(data) {
		if (this.element == null) {
			this.element = document.querySelector('.'+this.className);
		}
		let innerHTML = ''
		let headers = Object.keys(data[0]);

		let x = 0;
		let y = 0;

		headers.forEach(header => {
			innerHTML += '<th>' + header + '</th>'
		})
		data.forEach(row => {
			let line = ''
			x = 0;
			headers.forEach(header => {
				line += `<td class='cell cell_${x}_${y}'>` + '<kbd>' + row[header] + '</kbd>' + '</td>'
				x++;
			})
			y++;
			innerHTML += '<tr>' + line + '</tr>'
		});
		this.element.innerHTML = innerHTML;
		this.element.addEventListener('click', (e) => {
			let position = e.target.closest('.cell').className.split('_');
			//Utils.showSuccess(Utils.randomClassName())
			this.callback('table', position)
		});
	}

	run() {
		//this.setData(this.data);
	}
}