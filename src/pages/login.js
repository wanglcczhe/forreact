import React from 'react'
import {Link} from 'react-router-dom'
import './login.css'
export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            mess:''
        }
    }
    send = ()=>{
        Login.axios({
            url:'/api/login',
            method:'post',
            data:{
                username:this.state.username,
                password:this.state.password,
                save:true
            }
        }).then(
            res=>{
                if(res.data.err===0){
                    this.props.history.push('/me')
                }else{
                    this.setState({mess:res.data.mess})
                }
            }
        );
        
    }
    changeMess = (ev) =>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    render(){
        return(
            <div className="pages__login">
                <h3>这就是登录页面</h3>
                <div className="pages__login--input"><span> 账号：</span><input type="text" name='username' value={this.state.username} onChange={this.changeMess}/></div>
                <div className="pages__login--input">密码：<input type="text" name='password' value={this.state.password} onChange={this.changeMess}/></div>
                
                <b>{this.state.mess}</b>
                <input type="button" value="登录" onClick={this.send}/>
                <Link to="/reg" className="pages__login--zhuce">还没有账号？那就先去注册。。。</Link>
            </div>
        )
    }
}
