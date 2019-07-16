import common from './common';
import tools from './util';
class Init {
    constructor() {
        this.warp = {

        };
        this.init();
    };
    init(){
        console.log('the init page start');
        //数据处理

        window.source = $.extend(true,{},common);

        //读取页面中的dom节点

        console.log(source);
        //初始化页面渲染
        tools.renderTpl();
    
    };
};

export default  function init (){
    new Init();
};
//# sourceMappingURL=util.js.map