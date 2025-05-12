import { Utils } from "./utils"

export class ConfigEditor {
    constructor(title) {
        this.className = Utils.randomClassName()
        this.title = title;
        this.textareaClassName = Utils.randomClassName()
    }

    render() {
        let result = `<details name='${this.className}'>
        <summary>${this.title}</summary>
        <textarea class="${this.textareaClassName}"></textarea>
        <button>OK</button>
        </details>`
        return result
    }
}