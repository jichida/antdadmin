import React from 'react';
import DeviceTop from '../index_device/device_top';
const GlobalDistribution = ()=>{

  return (
    <div style={{
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
        <div className="dq">
            <img src="img/qqfb_bg.png" alt="" />
            <a href="qyzs.html">
                <div className="dt_dian" style={{left: '210px',top:'120px'}}>
                    <img src="img/dt_dian.png" alt="" />
                    <span>北美洲</span>
                </div>
            </a>
            <a href="qyzs.html">
                <div className="dt_dian" style={{left: '100px',top:'320px'}}>
                    <img src="img/dt_dian.png" alt="" />
                    <span>大洋洲</span>
                </div>
            </a>
            <a href="qyzs.html">
                <div className="dt_dian" style={{left: '407px',top:'307px'}}>
                    <img src="img/dt_dian.png" alt="" />
                    <span>南美洲</span>
                </div>
            </a>
            <a href="qyzs.html">
                <div className="dt_dian" style={{left: '640px',top:'87px'}}>
                    <img src="img/dt_dian.png" alt="" />
                    <span>欧洲</span>
                </div>
            </a>
            <a href="qyzs.html">
                <div className="dt_dian" style={{left: '610px',top:'240px'}}>
                    <img src="img/dt_dian.png" alt="" />
                    <span>非洲</span>
                </div>
            </a>
            <a href="qyzs.html">
                <div className="dt_dian" style={{left:'837px',top:'154px'}}>
                    <img src="img/dt_dian.png" alt="" />
                    <span>亚洲</span>
                </div>
            </a>
            <a href="qyzs.html">
                <div className="dt_dian" style={{left:'130px',top:'53px'}}>
                    <em>美国阿里斯加</em>
                </div>
                  </a>
                <a href="qyzs.html">
                    <div className="dt_dian" style={{left:'266px',top:'74px'}}>
                        <em>加拿大</em>
                    </div>
                </a>
                <a href="qyzs.html">
                    <div className="dt_dian" style={{left:'474px',top:'40px'}}>
                        <em>格陵兰</em>
                    </div>
                </a>
                <a href="qyzs.html">
                    <div className="dt_dian" style={{left:'860px',top:'63px'}}>
                        <em>俄罗斯</em>
                    </div>
                </a>
                <a href="qyzs.html">
                    <div className="dt_dian" style={{left:'941px',top:'175px'}}>
                        <em>中国</em>
                    </div>
                </a>
                <a href="qyzs.html">
                    <div className="dt_dian" style={{left:'984px',top:'377px'}}>
                        <em>澳大利亚</em>
                    </div>
                </a>
          
        </div>
        <p className="xianshi ">全球共 <span>960</span> 台设备 正常 <span>500</span> 台 异常 <span>460</span> 台</p>
    </div>

    </div>);
}

export default GlobalDistribution;
