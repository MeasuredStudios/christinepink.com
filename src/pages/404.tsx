import * as React from 'react';

import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>NOT FOUND</h2>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </header>
    </section>
  </Layout>
);

export default NotFoundPage;
