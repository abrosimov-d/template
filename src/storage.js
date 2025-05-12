export class Storage {
    constructor() {
        this.data = {};
    }

    set(key, value) {
        //this.data[key] = value;
        localStorage.setItem(key, value);
    }

    get(key, def) {
        let result = def;
        try {
            result = localStorage.getItem(key)
        } catch (error) {
            
        }
        return result;
    }
}