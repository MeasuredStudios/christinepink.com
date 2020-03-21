import '../assets/sass/main.scss';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Footer from './Footer';
import SideBar from './Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, fullMenu } = this.props;
    const { isPreloaded } = this.state;
    return (
      <div>
        <div className={isPreloaded ? ' main-body  is-preload' : ' main-body'}>
          <div id="page-wrapper">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
