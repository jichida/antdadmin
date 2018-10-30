import React from 'react';
import DeviceTop from './device_top';
import DeviceTitle from './device_title';

const IndexDevice = ()=>{
  return (<div style={{
        background: `url(img/bg2.png)`,
        backgroundPositionX: 'center',
        backgroundPositionY:'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundAttachment:'fixed',
        backgroundColor: '#f9fafb'
  }}>
        <DeviceTop />
      <div className="qbsb_box">
        <DeviceTitle />
        <div className="contant">
            <ul>
                <li>
                    <h2>
                        <img src="img/sb_yc.png" alt="" />
                        <span>北京翡翠山 20171116</span>
                    </h2>
                    <p>识别编号：125445554511112254444</p>
                    <p>设备名称：HHBJ25018</p>
                    <p>运行时间：02:10:10</p>
                    <div className="an">
                        <h3>Active Mode</h3>
                        <a href="sjxq2.html"><button>显示详情</button></a>
                        <div className="clear"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </div>
  );
}

export default IndexDevice;
