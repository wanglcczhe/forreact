import React from 'react';
import './Home.css'
import { Flex,SearchBar} from 'antd-mobile';
import menu from '../assets/imgs/icon/menu.png';
import ling from '../assets/imgs/icon/ling.png'
import axios from '../plugins/axios'


import Swiper from '../components/Swiper'
import Navbar from '../components/Navbar'
import List from '../components/List'
export default class Home extends React.Component{
    state={
        list:[]
    };
    componentDidMount(){
        axios({
            url:'/api/home',
            params:{_page:1,_limit:10}
        }).then(
            res=>{this.setState({list:res.data.data})}
        )
    }
    render(){
        return (
            <div className="flex-container" style={{width:"100%",height:"100%"}}> 
                <Flex>
                    <div className="home__serach--menu"><img src={menu} alt=""/></div>               
                    <Flex.Item><SearchBar placeholder="搜点啥呢" maxLength={8} /></Flex.Item>
                    <div className="home__serach--ling"><img src={ling} alt=""/></div> 
                </Flex>
                <Swiper/>
                <Navbar/>
                {
                    this.state.list.map((item,index)=>(
                        <List key={item.id} item={item} dataname="home" history={this.props.history}/>
                    )
                        
                    )
                }
                
            </div>
           
        )
    }
}
