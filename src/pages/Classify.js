import React from 'react';
import './Classify.css'
import queryString from 'query-string'
export default class Classify extends React.Component{
    state={
      list:{}
    }
    componentDidMount(){
      fetch(
        `/api/classify`,
      ).then(res=>res.json()).then(
        data=>this.setState({list:data.data[0]})
      )
    }

    findDetail=(item)=>{
      this.props.history.push({
        pathname:`/detail/${item.id}`,
        dataName:queryString.stringify({dataName:'classify'})
      })
    }

    render(){
        return (
            <div className="pages__classify">
                <h3>商品分类</h3>
                <div className="pages__classify--jujia">
                    <p>居家好男人</p>
                    <ul>
                        {
                         this.state.list.jujia?
                          this.state.list.jujia.map((item,index)=>(
                          <li key={index} dataName="classify" >
                          <img src={item.img}/>
                          <b>{item.title}</b>
                          <span>{item.des}</span>
                        </li>
                        )
                          
                       ):null}
                    </ul>
                </div>
                <div className="pages__classify--phone">
                    <p>手机电脑什么的</p>
                    <ul>
                    {
                         this.state.list.shouji?
                          this.state.list.shouji.map((item,index)=>(
                          <li key={index}>
                          <img src={item.img}/>
                          <b>{item.title}</b>
                          <span>{item.des}</span>
                        </li>
                        )
                          
                       ):null}
                    </ul>
                </div>
                <div className="pages__classify--suibian">
                    <p>随便看看</p>
                    <ul>
                    {
                         this.state.list.suibian?
                          this.state.list.suibian.map((item,index)=>(
                          <li key={index}>
                          <img src={item.img}/>
                          <b>{item.title}</b>
                          <span>{item.des}</span>
                        </li>
                        )                          
                       ):null}
                    </ul>
                </div>
            </div>            
        )
    }
}
