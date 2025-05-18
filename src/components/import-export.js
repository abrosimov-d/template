import { Utils } from "./utils"

export class ImportExport {
    constructor(title, callback) {
        this.className = Utils.randomClassName();
        this.textareaClassName = Utils.randomClassName();
        this.buttonImportClassName = Utils.randomClassName();
        this.buttonExportClassName = Utils.randomClassName();
        this.title = title;
        this.callback = callback;
        this.textarea = null;
        this.buttonImport = null;
        this.buttonExport = null;
    }

    render() {
        let result = `<details name='${this.className}'>
        <summary>${this.title}</summary>
        <textarea class="${this.textareaClassName} code-editor"></textarea>
        <button class="${this.buttonImportClassName}">IMPORT</button>
        <button class="${this.buttonExportClassName}">EXPORT</button>
        </details>`
        return result
    }

    run() {
        let config = this.callback('export');
        
        if (this.textarea == null)
            this.textarea = document.querySelector('.' + this.textareaClassName)

        if (this.buttonImport == null)
            this.buttonImport = document.querySelector('.' + this.buttonImportClassName)

        if (this.buttonExport == null)
            this.buttonExport = document.querySelector('.' + this.buttonExportClassName)

        this.textarea.textContent = config;

        this.textarea.addEventListener('change', () => {
            this.callback('config-import', this.textarea.value);
        })

        this.buttonImport.addEventListener('click', () => {
            this.callback('import', this.textarea.value);
        })

        this.buttonExport.addEventListener('click', () => {
            let data = this.callback('export');
            this.textarea.value = data;
            this.callback('toolbar', 'EXPORT');
        })
    }

    setText(text) {
        if (this.textarea != null)
            this.textarea.value = text;
    }

    getText() {
        return this.textarea.value;
    }
}