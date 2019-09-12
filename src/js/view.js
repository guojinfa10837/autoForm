
import common from './common';
//let template = {};
class View {
    constructor(setCallback,getCallback) {
        this.init(setCallback,getCallback);
    };
    init(setCallback,getCallback){
          
          window.souceData = new Proxy(common,{
            // get:function(target,key,receiver){
            //       console.log(`getting ${key}`);
            //       getCallback & getCallback(target,key,receiver);
            //       return Reflect.get(target,key,receiver);
            // },
            set:function(target,key,value,receiver){
                console.log(`setting ${key}`,value);
                target[key] = value;
                setCallback && setCallback(target,key,value,receiver);
                return Reflect.set(target,key,value,receiver);
            }
        });
        
    };
};

export default  function view (setCallback,getCallback){
    return new View(setCallback,getCallback);
};
//# sourceMappingURL=util.js.map