import React from "react";
import { Carousel } from 'antd';
import c from './slider.module.scss';
const contentStyle = {
  width:'100%',
  height: '70vh',
  color: 'blue',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


export default function Headercarusel(){
    return(
              <div className={c.carousel}>
        <Carousel autoplay>
    <div style={{backgroundImage:'https://apollo-olx.cdnvideo.ru/v1/files/wk75rqcxgqak1-UZ/image;s=583x329'}}>
      <button className={c.button}>BANNER BUTTON</button>
      <img style={contentStyle} src="" alt="" />
    </div>
    <div>
      <button className={c.button}>BANNER BUTTON</button>
      <img style={contentStyle} src="https://apollo-olx.cdnvideo.ru/v1/files/wk75rqcxgqak1-UZ/image;s=583x329" alt="" />
    </div>
    <div>
      <button className={c.button}>BANNER BUTTON</button>
      <img style={contentStyle} src="" alt="" />

    </div>
    <div>
      <button className={c.button}>BANNER BUTTON</button>
      <img style={contentStyle} src="https://apollo-olx.cdnvideo.ru/v1/files/wk75rqcxgqak1-UZ/image;s=583x329" alt="" />
    </div>
  </Carousel>
        </div>
    )
}