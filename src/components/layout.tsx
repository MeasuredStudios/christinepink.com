import '../assets/sass/main.scss';

import PropTypes from 'prop-types';
import * as React from 'react';
import Helmet from 'react-helmet';

import Footer from './footer';

const Layout = ({ children }) => {
  const [isPreloaded, toggleLoading] = React.useState(true);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      toggleLoading(false);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPreloaded]);

  return (
    <>
      <Helmet
        title={'Christine Pink'}
        meta={[
          { name: 'description', content: `Christine Pink's Personal Website` },
          { name: 'keywords', content: 'ChristinePink, Christine Pink, Coach, leadership, Educational leadership, project management, scrum, agile' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
        <div id="page-wrapper">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
