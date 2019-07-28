
import util from './util';
import common from './common';

class Init {
    constructor(option) {
        let _this = this;
        this.wrap = {
              jqObj:undefined
        };
        this.methods = {
            //通过id获取每一条对应的数据
             getItemData(id,arr){
                 console.log(id);
                for(let i=0;i<arr.length;i++){
                    console.log(id,arr[i].id,id == arr[i].id);
                   if(id == arr[i].id){
                       return arr[i];
                   }
                }
                return {};
             },
             setObj(obj,queue){
                let arr = [];
                for(let i =0;i<queue.length;i++){
                   if(obj.id == queue[i].id ){
                       queue[i]= obj;
                   }
                }
                return queue;
             },
             setLiuzique(queue){
                 let arr = [];
                 for(let i =0;i<queue.length;i++){
                    if(queue[i].isSelected){
                       arr.push(queue[i]);
                    }
                 }
                 return arr;
             }

        };
        this.option = Object.assign({},option);
        this.tools = util(); //继承util
        this.tools.init();
        this.init();
    };
    init(){
        let _this = this;
        let opts = this.option;
        let methods = this.methods;
        console.log('the init page start');
         //读取页面中的dom节点
        this.wrap.jqObj = opts.target;
        this.wrap.configWrap = this.wrap.jqObj.find(".contentLeft");
        this.wrap.liziWrap = this.wrap.jqObj.find(".contentRight");
        this.wrap.messageTip = this.wrap.jqObj.find(".messageTip");
        this.wrap.mask = this.wrap.jqObj.find(".mask");
        //初始化页面渲染
        //methods.setConfigTpl();
        souceData.configQueue = common.configQueue;
        souceData.liziQueue = common.liziQueue;
        //事件绑定
        this.wrap.jqObj.on("click",".checkbox",function(){
            var id = $(this).attr("id");
            let itemObj = methods.getItemData(id,souceData.configQueue);
            itemObj.isSelected ? itemObj.isSelected = false: itemObj.isSelected = true;
            souceData.configQueue =  methods.setObj(itemObj,souceData.configQueue);
            souceData.liziQueue = methods.setLiuzique(souceData.configQueue);
        });
        this.wrap.jqObj.on("click",".addListBtn",function(){
            souceData.addType = 1;
            _this.wrap.messageTip.show();
            _this.wrap.mask.show();
        });
        this.wrap.jqObj.on("click",".tabs li",function(){
            let type = $(this).attr("type");
            console.log(type);
            $(this).addClass("action").siblings().removeClass("action");
            if(type == 1){
                souceData.liziQueue = souceData.liziQueue;
            }else{
                console.log($(".contentRight").html())
                 let html = $(".contentRight").html().toString();
                 let code = html.replace(/\</g,"&lt").replace(/\>/,"&gt");
                 $(".contentRight").html("<pre>"+code+"</pre>")
            }
        });
    };
    
};

export default  function init (option){
    return new Init(option);
};
