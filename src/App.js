import React from 'react';
import './App.css';

import Auth from './guard/Auth'
import Home from './pages/Home';
import Classify from './pages/Classify'
import TabNav from './components/TabBar'
import Shopcar from './pages/Shopcar'
import Me from './pages/Me'
import Detail from './pages/Detail'
import Login from './pages/login'
import Reg from './pages/reg'
import Loading from './components/loading'

import {connect} from 'react-redux';

import {VIEW_FOOT} from './config/variable'

import {Switch,Route,Redirect} from 'react-router-dom'
class App extends React.Component{
  componentWillReceiveProps(nextProps){
    let path = nextProps.location.pathname;
    this.watchRoute(path)
  }
  componentDidMount(){
    let path = this.props.location.pathname;
    this.watchRoute(path)
  }
  watchRoute=(path)=>{
    let {viewFoot}=this.props;
    if(/home|classify|me|shopcar/.test(path)){
      viewFoot(true);
    }
    if(/login|reg|detail/.test(path)){
      viewFoot(false);
    }
  }
  render(){
    let {bulala,bLoading}=this.props;
    return (
      <div className="App">
        {bLoading&&< Loading/>}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/classify" component={Classify} />
          <Route path="/shopcar" component={Shopcar} />
          <Auth path="/me" component={Me} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/detail/:id" component={Detail} />
          <Redirect exact from="/" to="/home" />
        </Switch>
        
        {bulala?<TabNav location={this.props.location}/>:null}
      </div>
    );
  }
 
}
const initMapStateToProps=state=>{return {
  bulala:state.bFoot,
  bLoading:state.bLoading
}};
const initMapDispatchToProps=dispatch=>({
  viewFoot:(bl)=>dispatch({type:VIEW_FOOT,payload:bl}),
})

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App)