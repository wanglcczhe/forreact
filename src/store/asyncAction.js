import axios from "../plugins/axios";

export default ({apiname,aprams,typeName})=>(dispatch,getState)=>{
    return axios({
        url:'/api/'+apiname,
        params:params||null
    }).then(
        res=>{
            dispatch({type:typeName,payload:res.data});
            return {err:res.data.err,msg:res.data.msg}
        }
    )
}