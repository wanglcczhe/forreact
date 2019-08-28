import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './detail.css'
import home from '../assets/imgs/icon/home.png'
import kefu from '../assets/imgs/icon/kefu.png'
import storge from '../assets/imgs/icon/storge.png'
import axios from '../plugins/axios';
import queryString from 'query-string';
import * as variable from '../config/variable'
import {ADD_ITEM} from '../config/variable'
import {connect} from 'react-redux';
import { Toast } from 'antd-mobile';

class Detail extends React.Component{
    state={
        data:{}
    }
    componentDidUpdate(){
        // console.log(this.state.data)
    }
    componentDidMount(){
        
        let id = this.props.match.params.id;
        let dataName=queryString.parse(this.props.location.search).dataName
        axios({
            url:`/api/${dataName}/${id}`
        }).then(
            res=>{this.setState({data:res.data.data})}
        )
    }
    successToast=()=> {
        Toast.success('添加购物车成功', 1);
      }
    toHome=()=>{
        this.props.history.push("/home")
    }
    render(){
        
        return (


            this.state.data.price?
            <div className="pages__detail">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {this.props.history.go(-1)}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >商品详情</NavBar>
                <img src={variable.baseUrl+this.state.data.goods}/>
                <h3>{this.state.data.des}</h3>
                <h4><span>现在只卖：{parseFloat(this.state.data.price.slice(1,this.state.data.price.length-1)*0.5).toFixed(2)}</span><s>原价：{this.state.data.price}</s></h4>
                <div className="pages__detail--footer">
                    <ul>
                        <li onClick={this.toHome}>
                            <img src={home}/>
                            <span>首页</span>
                        </li>
                        <li>
                            <img src={kefu}/>
                            <span>客服</span>
                        </li>
                        <li>
                            <img src={storge}/>
                            <span>收藏</span>
                        </li>
                        <li className="te"><input type="button" value="添加到购物车" onClick={()=>{this.props.addItem(this.state.data);this.successToast()}}/></li> 
                    </ul>
                    
                </div>
            </div>:null
        )
    }
}

const initMapStateToProps=state=>({
    
    
  });
const initMapDispatchToProps=dispatch=>({
    addItem:(item)=>dispatch({type:ADD_ITEM,payload:item}),
  })
  
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Detail)
