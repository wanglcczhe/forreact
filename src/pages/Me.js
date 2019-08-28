import React from 'react';
import { Grid } from 'antd-mobile';
import './me.css'
import * as variable from '../config/variable'

import ding from '../assets/imgs/user/ding.png'
import gong from '../assets/imgs/user/gong.png'
import Axios from 'axios';
const data1 = Array.from(new Array(4)).map(() => ({
    icon:ding,
  }));
const data2 = Array.from(new Array(8)).map(() => ({
    icon:gong,
}));

export default class Me extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:{}
        }
    }
    logout=()=>{
        Axios({
            url:'/api/logout',
            method:'put'
        }).then(
            res=>{
                this.setState({data:res.data})
                console.log(res.data)
                if(res.data.err===0){this.props.history.push('/login')}
            }
        );
    }
    
    render(){
        return (
            <div className="pages__me">
                <div className="pages__me--bg">
                    <em>更多详细资料</em>
                    <input type="button" value="注销" onClick={this.logout} className="s"/>
                    <b><img src={variable.baseUrl+this.props.data.icon} alt="" /></b>
                    <span>{this.props.data.nikename}</span>
                    <h3>会员独享特权<a href="#">成为会员</a></h3>
                </div>
                <div className="pages__me--ding">
                    <h3>我的订单<span>查看全部订单 ></span></h3>
                    <Grid data={data1}
                        columnNum={4}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}>
                            <img src={dataItem.icon} style={{ width: '50px', height: '50px' }} alt="" />
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                <span>待收货</span>
                            </div>
                            </div>
                        )}
                    />
                </div>
                <div className="pages__me--gong">
                    <h3>必备工具</h3>
                    <Grid data={data2}
                        columnNum={4}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}>
                            <img src={dataItem.icon} style={{ width: '50px', height: '50px' }} alt="" />
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                <span>待收货</span>
                            </div>
                            </div>
                        )}
                    />
                </div>

            </div>
            
        )
    }
}
