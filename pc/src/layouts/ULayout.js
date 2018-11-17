import React from 'react';
import { Layout } from 'antd';
import GlobalHeader from '../components/GlobalHeader/Top';
const { Header, Content, Footer } = Layout;




class ULayout extends React.PureComponent {

  render() {
    const { children } = this.props;
    return (
        <Layout style={{height: "100vh"}}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <GlobalHeader />
          </Header>
          <Content style={{ margin: '24px 16px 50px' }}>
            <div style={{ padding: 0, background: '#f0f2f5', minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
             ©2018 爱上门出品
          </Footer>
        </Layout>
    )
  }
}

export default ULayout;