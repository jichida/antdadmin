import React, { PureComponent } from 'react';
import { Layout, message } from 'antd';
import Animate from 'rc-animate';
import GlobalHeader from '../components/GlobalHeader';
// import TopNavHeader from '../components/TopNavHeader';
import styles from './Header.module.less';
// import Authorized from '@/utils/Authorized';

const { Header } = Layout;

class HeaderView extends PureComponent {
  state = {
    visible: true,
  };

  static getDerivedStateFromProps(props, state) {
    if (!props.autoHideHeader && !state.visible) {
      return {
        visible: true,
      };
    }
    return null;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handScroll, { passive: true });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handScroll);
  }

  getHeadWidth = () => {
    const { isMobile, collapsed, setting } = this.props;
    //const { fixedHeader, layout } = setting;
    //if (isMobile || !fixedHeader || layout === 'topmenu') {
    //  return '100%';
    //}
    return collapsed ? 'calc(100% - 80px)' : 'calc(100% - 256px)';
  };

  handleNoticeClear = type => {
    message.success(
      `成功`
    );
  };

  handleMenuClick = ({ key }) => {
  };

  handleNoticeVisibleChange = visible => {
    if (visible) {
      const { dispatch } = this.props;
      dispatch({
        type: 'global/fetchNotices',
      });
    }
  };

  handScroll = () => {
    const { autoHideHeader } = this.props;
    const { visible } = this.state;
    if (!autoHideHeader) {
      return;
    }
    const scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    if (!this.ticking) {
      this.ticking = true;
      requestAnimationFrame(() => {
        if (this.oldScrollTop > scrollTop) {
          this.setState({
            visible: true,
          });
        }
        if (scrollTop > 300 && visible) {
          this.setState({
            visible: false,
          });
        }
        if (scrollTop < 300 && !visible) {
          this.setState({
            visible: true,
          });
        }
        this.oldScrollTop = scrollTop;
        this.ticking = false;
      });
    }
  };

  render() {
    const { isMobile, handleMenuCollapse, setting } = this.props;
    //const { navTheme, layout, fixedHeader } = setting;//{fixedHeader ? styles.fixedHeader : ''}>
    const { visible } = this.state;
    const isTop = false;//layout === 'topmenu';
    const width = this.getHeadWidth();
    const HeaderDom = visible ? (
      <Header style={{ padding: 0, width }} className={styles.fixedHeader}>
          <GlobalHeader
            onCollapse={handleMenuCollapse}
            onNoticeClear={this.handleNoticeClear}
            onMenuClick={this.handleMenuClick}
            onNoticeVisibleChange={this.handleNoticeVisibleChange}
            {...this.props}
          />
      </Header>
    ) : null;
    return (
      <Animate component="" transitionName="fade">
        {HeaderDom}
      </Animate>
    );
  }
}

export default HeaderView;

// connect(({ user, global, setting, loading }) => ({
//   currentUser: user.currentUser,
//   collapsed: global.collapsed,
//   fetchingNotices: loading.effects['global/fetchNotices'],
//   notices: global.notices,
//   setting,
// }))(HeaderView);
