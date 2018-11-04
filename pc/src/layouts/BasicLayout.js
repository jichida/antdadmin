import React from 'react';
import { Layout } from 'antd';
import DocumentTitle from 'react-document-title';
import isEqual from 'lodash/isEqual';
import memoizeOne from 'memoize-one';


import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import pathToRegexp from 'path-to-regexp';
// import { enquireScreen, unenquireScreen } from 'enquire-js';


import SiderMenu from '../components/Menu';
import logo from '../assets/logo.svg';
import Footer from './Footer';
import Header from './Header';
import Context from './MenuContext';
// import Exception403 from '../pages/Exception/403';



const { Content } = Layout;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};



class BasicLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getPageTitle = memoizeOne(this.getPageTitle);
    //this.getBreadcrumbNameMap = memoizeOne(this.getBreadcrumbNameMap, isEqual);
    //this.breadcrumbNameMap = this.getBreadcrumbNameMap();
    //this.matchParamsPath = memoizeOne(this.matchParamsPath, isEqual);
  }

  state = {
    rendering: true,
    isMobile: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;

    this.renderRef = requestAnimationFrame(() => {
      this.setState({
        rendering: false,
      });
    });
    // this.enquireHandler = enquireScreen(mobile => {
    //   const { isMobile } = this.state;
    //   if (isMobile !== mobile) {
    //     this.setState({
    //       isMobile: mobile,
    //     });
    //   }
    // });
  }

  componentDidUpdate(preProps) {
    // After changing to phone mode,
    // if collapsed is true, you need to click twice to display
    const { isMobile } = this.state;
    const { collapsed } = this.props;
    if (isMobile && !preProps.isMobile && !collapsed) {
      this.handleMenuCollapse(false);
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.renderRef);
    // unenquireScreen(this.enquireHandler);
  }

  getContext() {
    const { location } = this.props;
    return {
      location,
    };
  }

  getPageTitle = pathname => {
    const currRouterData = this.matchParamsPath(pathname);

    if (!currRouterData) {
      return '爱上门';
    }
    const message = `${currRouterData.locale} || ${currRouterData.name}`;
    return `${message} - 爱上门`;
  };

  getLayoutStyle = () => {
    const { isMobile } = this.state;
    const { fixSiderbar, collapsed, layout } = this.props;
    if (fixSiderbar && layout !== 'topmenu' && !isMobile) {
      return {
        paddingLeft: collapsed ? '80px' : '256px',
      };
    }
    return null;
  };

  getContentStyle = () => {
    const { fixedHeader } = this.props;
    return {
      margin: '24px 24px 0',
      paddingTop: fixedHeader ? 64 : 0,
    };
  };

  handleMenuCollapse = collapsed => {

    //const { dispatch } = this.props;
    //dispatch({
    //  type: 'global/changeLayoutCollapsed',
    //  payload: collapsed,
    //});
  };

  render() {
    const {
      //navTheme,
      //layout: PropsLayout,
      children,
      //location: { pathname },
    } = this.props;
    const { isMobile } = this.state;
    const isTop = false;//PropsLayout === 'topmenu';
    //const routerConfig = this.matchParamsPath(pathname);
    const layout = (
      <Layout>
        {isTop && !isMobile ? null : (
          
          <SiderMenu
            logo={logo}
            theme="dark"
            onCollapse={this.handleMenuCollapse}
            isMobile={isMobile}
            {...this.props}
          /> 
        )}
        <Layout
          style={{
            ...this.getLayoutStyle(),
            minHeight: '100vh',
          }}
        >
          <Header
            handleMenuCollapse={this.handleMenuCollapse}
            logo={logo}
            isMobile={isMobile}
            {...this.props}
          />
          <Content style={this.getContentStyle()}>
              {children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
    return (
      <React.Fragment>
        <DocumentTitle title="">
          <ContainerQuery query={query}>
            {params => (
              <Context.Provider value={this.getContext()}>
                <div className={classNames(params)}>{layout}</div>
              </Context.Provider>
            )}
          </ContainerQuery>
        </DocumentTitle>
        
      </React.Fragment>
    );
  }
}

export default BasicLayout
