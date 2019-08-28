import React from 'react'
import './reg.css'
import Axios from 'axios';
export default class Reg extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            mess:''
        }
    }
    changeMess=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    send=()=>{
        Axios({
            url:'/api/reg',
            method:'post',
            data:{
                username:this.state.username,
                password:this.state.password
            }
        }).then(
            res=>{
                this.setState({mess:res.data.mess});
                if(res.data.err===0){this.props.history.push('/login')}             
            }  
        )
    }
    render(){
        return(
            <div className="pages__reg">
                <h3>这就是注册页面</h3>
                <input type="text" name="username" value={this.state.username} onChange={this.changeMess}/>
                <input type="text" name="password" value={this.state.password} onChange={this.changeMess}/>
                <div className="pages__reg--mess">{this.state.mess}</div>
                <input type="button" value="注册" onClick={this.send}/>
            </div>
        )
    }
}
