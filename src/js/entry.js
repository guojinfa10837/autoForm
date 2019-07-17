import 'jquery';
import init from './init';
import addConfig from './addConfig';
class Entry {
    constructor() {
        this.init();
    };
    init(){
            init({
               target: $(".autoForm")
            });
            addConfig({
                target: $(".autoForm")
            })
    };

};
export default  function entry (){
    return  new Entry();;
};