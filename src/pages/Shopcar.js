import React from 'react';
import './shopcar.css'
import {Stepper } from 'antd-mobile';
import * as types from '../config/variable'
import {connect} from 'react-redux';

class Shopcar extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            val: 0,
            val1: 0,
          };
    }
    componentDidMount(){
        console.log(this.props.list)
    }
    onChange = (val) => {
        // console.log(val);
        this.setState({ val });
      }
    render(){
        return (
            <div className="pages__shopcar">
                <h3>史上将就的购物车</h3>
                <ul>
                   { this.props.list.map((item,index)=>(
                        <li >
                        <img src={types.baseUrl+item.goods} alt=""/>
                        <span>单价：{item.price}</span>
                        <div>
                            <Stepper
                                style={{ width: '100%', minWidth: '100px' }}
                                showNumber
                                min={1}
                                value={item.num}
                                onChange={this.onChange}
                            />
                        </div>
                    </li>
                    )
                   )
                   }                    
                </ul>
                {this.props.list.length===0?null:(
                    <div className="pages__shopcar--jiesuan">
                        <span>共计：{}</span><input type="button" value="去结算"/>
                    </div>
                )}
            </div>           
        )
    }
}
const initMapStateToProps=state=>{return {
    list:state.list,
    
  }};
const initMapDispatchToProps=dispatch=>({
  })
  
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Shopcar)