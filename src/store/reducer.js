import * as variable from '../config/variable'

export default (state,{type,payload})=>{
    switch (type){
        case variable.VIEW_FOOT:
            return {...state,bFoot:payload};
        case variable.CHANGE_PATH:
            return {...state,changePath:payload};
        case variable.ADD_ITEM:
            let arr={...state}.list;
            let find=false;
            arr.forEach((item,index)=>{
                if(item.id===payload.id){
                    item.num++;
                    find=true;
                }
            })
            if(!find){            
                arr.push(payload);
            } 
            console.log(arr)         
            return {...state,list:arr};  
        default: 
            return state;    
    }
}


