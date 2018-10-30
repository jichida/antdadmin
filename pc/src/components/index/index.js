import React,{ Component } from 'react';

import IndexTop from './index_top';
import IndexNav from './index_nav';
import IndexSearch from './index_search'

class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
        <IndexTop />
      <div className="search_box">
        <IndexNav />
        <IndexSearch />
      </div>
      </div>
    );
  }
}

export default Index;
