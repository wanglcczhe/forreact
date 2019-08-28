import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

export default class Swiper extends React.Component{
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['https://gd1.alicdn.com/imgextra/i2/2/O1CN01B8dR6p1tfWpKSR8Op_!!2-item_pic.png', 'https://gd1.alicdn.com/imgextra/i1/2934355929/O1CN01k9a8Tl1tfWmL1mcC7_!!2934355929.jpg', 'https://gd3.alicdn.com/imgextra/i3/2934355929/O1CN01Afggom1tfWnzxOudp_!!2934355929.jpg'],
          });
        }, 100);
      }
    render() {
        return (
          <WingBlank>
            <Carousel
              autoplay={true}
              infinite
              beforeChange={(from, to) =>{}}
              afterChange={index =>{}}
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`${val}`}
                    alt=""
                    style={{ width: '100%',height:'300px', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        );
    }
}