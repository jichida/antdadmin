import React from 'react';
import DeviceTop from '../index_device/device_top';
import ViewTitle from './view_title';
const View = ()=>{
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
        <ViewTitle />
        <div className="contant">
            <ul className="sb">
                <li>
                    <h2>
                        <span>东北地区</span>
                    </h2>
                    <div className="qsb">
                        <h1>970</h1>
                        <p>总设备数量</p>
                    </div>
                    <div className="xianshi">
                        <div>
                            <img src="img/sb_zc.png" alt="" />
                            <span>正常运行：10</span>
                        </div>
                        <div>
                            <img src="img/sb_yc.png" alt="" />
                            <span>异常运行：06</span>
                        </div>
                        <div>
                            <img src="img/sb_wlw.png" alt="" />
                            <span>未联网设备：10</span>
                        </div>
                    </div>

                </li>
              </ul>
          </div>
      </div>
    </div>
  );
}

export default View;
