import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import SiderMenu from '../components/Menu';
import logo from '../assets/logo.svg';
const { Header, Content, Footer, Sider } = Layout;

class GLayout extends React.PureComponent {

  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => { console.log(broken); }}
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="logo" />
          <SiderMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
             ©2018 
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

  export default GLayout;