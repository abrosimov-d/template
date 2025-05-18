export class Header {
	constructor(title) {
		this.title = title;
		document.title = title;
	}

	render() {
		return `<header class="container"><h3>${this.title}</h3></header>`
	}
}