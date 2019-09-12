 let commonObj = {
     title:"ATUOFORM",
     liziQueue:[
     
     ],
     configQueue:[
        {
            id:"1",
            type:1,//输入框
            label:"输入框",
            isSelected:false,
            val:""
        },
        {
            id:"2",
            type:2,//输入域
            isSelected:false,
            label:"输入域"
           

        },
        {
            id:"3",
            type:3,//单选框
            label:"单选框",
            isSelected:false,
            list:["1","2"]
           
        },
        {
           id:"4",
           type:4,//多选
           label:"多选",
           isSelected:false,
           list:["1","2"]
           
        },
        {
            id:"5",
            type:5,//时间
            label:"时间",
            isSelected:false,
            isDataRegion:false
         }
     ],
     addType:1
    };

 export default commonObj;