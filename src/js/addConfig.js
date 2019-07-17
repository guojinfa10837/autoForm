
import util from './util';


class Fn {
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

        this.wrap.messageTip.on("click",".configtab li",function(){
            let type = $(this).attr("type");
            souceData.addType = type;
        })
        

    };
    
};

export default  function addConfig (option){
    return new Fn(option);
};
