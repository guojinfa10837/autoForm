class Util {
    constructor() {
        this.init();
    };
    init(){
      
        var obj = new Proxy({},{
            get:function(target,key,receiver){
                  console.log(`getting ${key}`);
                  return Reflect.get(target,key,receiver);
            },
            set:function(target,key,value,receiver){
                console.log(`setting ${key}`);
                return Reflect.set(target,key,value,receiver);
            }
        });
        obj.count = 1;
        setInterval(function(){
            //obj.count++;
            console.log( obj.count);
        },300);
    };
    

};

export default  function util (){
    new Util();
};
//# sourceMappingURL=util.js.map