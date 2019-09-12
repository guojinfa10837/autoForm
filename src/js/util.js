

import view from './view';
import configTpl from '../assets/tpl/configTpl.art';
import luziTpl from '../assets/tpl/lizi.art';
import addConfig from '../assets/tpl/addConfig.art';

class Util {
    constructor() {
        this.wrap = {

        };
        

    };
    init(){
        let _this = this;
        this.wrap.jqObj = $("body");
        this.wrap.configWrap = this.wrap.jqObj.find(".contentLeft");
        this.wrap.liziWrap = this.wrap.jqObj.find(".contentRight");
        this.wrap.messageBody = this.wrap.jqObj.find(".messageBody");
        view(function(target,key,value,receiver){
            _this["set"+key] && _this["set"+key]();
        },function(target,key,value,receiver){});
        
    };

    tpl(tpl,opt){
        let  htmlfn = tpl ?  tpl(opt) :"";
        return htmlfn;
    };
    renderTpl(wrap,tpl,option){
        let _this = this;
        let html = this.tpl(tpl,option);
        let $html = $(html);
        wrap.html($html);
    };
    setconfigQueue(){
        let _this = this;
        console.log(_this.wrap.configWrap.length);
        _this.renderTpl(_this.wrap.configWrap,configTpl,window.souceData);
    };
    setliziQueue(){
        let _this = this;
        _this.renderTpl(_this.wrap.liziWrap,luziTpl,window.souceData);
    };
    setaddType(){
        let _this = this;
        _this.renderTpl(_this.wrap.messageBody,addConfig,window.souceData);
    }
};

export default  function util (){
    return new Util();
};
//# sourceMappingURL=util.js.map