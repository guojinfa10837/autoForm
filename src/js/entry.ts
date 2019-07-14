import util from './util';
import init from './init';
(() => {

    util();

    class Entry {
        constructor() {
            this.init();
        }
        init(): any {
             init();
        }
    }
    new Entry();
})()