

import tplObj from './template';
import common from './common';
import template from '../assets/tpl/configTpl.art';
//let template = {};
class Util {
    constructor() {
        this.init();
    };
    init(){
          window.souceDate = new Proxy(common,{
            get:function(target,key,receiver){
                  console.log(`getting ${key}`);
                  return Reflect.get(target,key,receiver);
            },
            set:function(target,key,value,receiver){
                console.log(`setting ${key}`);
                return Reflect.set(target,key,value,receiver);
            }
        });
        
    };

    tpl(tpl,opt){
        let  htmlfn = tpl(opt);
        return html;
    };

    render(wrap,tpl,option){
        let _this = this;
        let html = this.tpl(tpl,option);
        let $html = $(html);
        wrap.html($html);
    };

    
    

};

export default  function util (){
    new Util();
};
//# sourceMappingURL=util.js.map