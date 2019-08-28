import React from 'react';
import { Grid } from 'antd-mobile';
import shopping from '../assets/imgs/icon/shopping.png'
const data1 = Array.from(new Array(5)).map(() => ({
    icon: shopping,
  }));

export default class Navbar extends React.Component{
    render(){
        return (
            <Grid data={data1}
                columnNum={5}
                hasLine={false}
                renderItem={dataItem => (
                    <div style={{ padding: '10px 10px 0 10px',height:'110px',background:'#f5f5f9'}}>
                        <img src={dataItem.icon} style={{ width: '70px', height: '70px',"borderRadius":'50%'}} alt="" />
                        <div style={{ color: '#333', fontSize: '14px', marginTop: '10px',height:'50px'}}>
                            <span>购物天堂</span>
                        </div>
                    </div>
            )}
            />
        )
    }
}
