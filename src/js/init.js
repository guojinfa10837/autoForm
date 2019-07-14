import common from './common';
class Init {
    constructor() {
        this.init();
    };
    init(){
        console.log('the init page start');
        //数据处理

        window.source = $.extend(true,{},common);
        console.log(source);
    };
    

};

export default  function init (){
    new Init();
};
//# sourceMappingURL=util.js.map