import React from 'react';

const DeviceTop = ()=>{
  return (<div className="top">
      <img src="img/title2.png" alt="" />
      <div className="top_a">
          <ul>
              <li>
                  <a href="search.html">搜索页</a>

              </li>
              <li className="active">
                  <a href="ycjq.html">异常机器</a>
              </li>
              <li className="">
                  <a href="qbsb.html"> 全部设备</a>
              </li>
              <li className="">
                  <a href="qqfb.html">全球分布</a>
              </li>
          </ul>
      </div>
      <div className="top_ma">
          <ul>

              <li>
                  <a href="tzgg.html"><img src="img/message.png" alt="" className="message" /></a>

              </li>
              <li>
                  <img src="img/login_iconc.png" alt="" />
                  <select>
                      <option value="volvo">中文</option>
                      <option value="saab">英文</option>
                  </select>
              </li>
              <li>
                  <img src="img/tx.png" alt="" className="tx" />
                  <p>992631992@qq.com</p>
                  <img src="img/login_icond.png" alt="" />
              </li>
          </ul>

      </div>
  </div>);
}

export default DeviceTop;
