"use strict";
class SystemCache {
    constructor() { }
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new SystemCache();
        return this.instance;
    }
}
//# sourceMappingURL=singleton.js.map