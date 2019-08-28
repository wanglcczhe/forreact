import React from 'react';
import './List.css'
import queryString from 'query-string'
import * as variable from '../config/variable'
export default class List extends React.Component{
    toDetail=()=>{
        this.props.history.push({
            pathname:`/detail/${this.props.item._id}`,
            search:queryString.stringify({
                dataName:this.props.dataname
            })
        })
    }
    render (){
        return (
            <div className="Logout__list" onClick={this.toDetail}>
                <img src={variable.baseUrl+this.props.item.goods} alt=""/>
                <h3>{this.props.item.title}</h3>
                <p><s><span>原价：{this.props.item.price}</span></s><b><span>折后价：￥{parseFloat(this.props.item.price.slice(1,this.props.item.price.length-1)*0.5).toFixed(2)}</span></b></p>
            </div>
        )
    }
}

