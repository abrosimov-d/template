import { Utils } from "./utils";

export class CheckboxList {
	constructor(name, callback) {
		this.name = name;
		this.callback = callback;
        this.checkboxes = [];
        this.className = Utils.randomClassName();
	}

	render() {
		return `<fieldset class="checkbox-list ${this.className}">
        ${this.renderInnerHTML()}
        </fieldset>`;
	}

    renderInnerHTML() {
        let innerHTML = `<legend>${this.name}</legend>`;
        this.checkboxes.forEach(checkbox => {
            innerHTML += `  <label>
        <input type="checkbox" id="${checkbox.id}"/>${checkbox.title}</label>`;});
        return innerHTML;
    }

	run() {
        if (this.element == null)
            this.element = document.querySelector(`.${this.className}`);
        this.element.innerHTML = this.renderInnerHTML();
        this.element.addEventListener('change', (event) => {
            let data = {
                id: event.target.id,
                checked: event.target.checked
            }
            this.callback('checkbox-list', data);
        });
	}

    addCheckbox(title, id) {
        this.checkboxes.push({title: title, id: id});
        this.element.innerHTML = this.renderInnerHTML();
        //return;
    }
}
