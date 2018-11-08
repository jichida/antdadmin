import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import SiderMenu from '../components/Menu';
import logo from '../assets/logo.gif';
import GlobalHeader from '../components/GlobalHeader';
const { Header, Content, Footer, Sider } = Layout;



class GLayout extends React.PureComponent {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }


  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          collapsible
          collapsed={this.state.collapsed}
          trigger={null}
        >
          <div className="logo" />
          <SiderMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <GlobalHeader collapsed={this.collapsed} onCollapse={this.toggle} />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 0, background: '#f0f2f5', minHeight: 360 }}>
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