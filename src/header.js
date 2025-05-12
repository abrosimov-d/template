export class Header {
	constructor(title) {
		this.title = title;
		document.title = title;
	}

	render() {
		return `<header class="container">${this.title}</header>`
	}
}