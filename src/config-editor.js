import { Utils } from "./utils"

export class ConfigEditor {
    constructor(title, callback) {
        this.className = Utils.randomClassName()
        this.title = title;
        this.textareaClassName = Utils.randomClassName()
        this.callback = callback;
        this.textarea = null;
    }

    render() {
        let result = `<details name='${this.className}'>
        <summary>${this.title}</summary>
        <textarea class="${this.textareaClassName} code-editor"></textarea>
        </details>`
        return result
    }

    run() {
        let configData = this.callback('load-config');
        
        if (this.textarea == null)
            this.textarea = document.querySelector('.'+this.textareaClassName)

        this.textarea.textContent = configData;

        this.textarea.addEventListener('change', () => {
            console.log(this.value)
            this.callback('config-change', this.textarea.value);
        })
    }
}