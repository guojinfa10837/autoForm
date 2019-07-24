
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
             },
             formAmzai(form){
                let $input = form.find("textarea[name],input[name]");
                var Obj = {};
                for(var i=0;i<$input.length;i++){
                     Obj[$input.eq(i).attr("name")] = $input.eq(i).val();
                }
                return Obj;
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
//console.log('the init page start');
         //读取页面中的dom节点
        this.wrap.jqObj = opts.target;
        this.wrap.configWrap = this.wrap.jqObj.find(".contentLeft");
        this.wrap.liziWrap = this.wrap.jqObj.find(".contentRight");
        this.wrap.messageTip = this.wrap.jqObj.find(".messageTip");
        this.wrap.mask = this.wrap.jqObj.find(".mask");
        let close=()=>{
           this.wrap.messageTip.hide();
           this.wrap.mask.hide();
        };
        this.wrap.messageTip.on("click",".configtab li",function(){
            let type = $(this).attr("type");
            souceData.addType = type;
        });

        $(document).on("click",".ok",function(){
              let $form = _this.wrap.messageTip.find(".addListform");
              let object = methods.formAmzai($form);
              object.id = new Date().getTime();
              object.type = Number(_this.wrap.messageTip.find("li.action").attr("type"));
              object.isSelected = false;
              if(object.list){
                  object.list = object.list.replace(/\n/g,",").split(",");
              }
              souceData.configQueue.push(object);
              souceData.configQueue = souceData.configQueue.map(function(currentValue){
                  return currentValue;
              });
              close();
        })
        
        $(document).on("click",".cel",function(){
           
            close();
        })
    };
    
};

export default  function addConfig (option){
    return new Fn(option);
};
