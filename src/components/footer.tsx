import * as React from 'react';

export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h4 className="major">Site Details</h4>
        <ul className="copyright">
          <li>
            &copy;:{' '}
            <a
              href="https://www.jovanipink.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Jovani Pink
            </a>
          </li>
          <li>
            Framework:{' '}
            <a
              href="https://www.gatsbyjs.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Gatsby.js
            </a>
          </li>
          <li>
            Design:{' '}
            <a
              href="https://html5up.net"
              rel="noopener noreferrer"
              target="_blank"
            >
              HTML5 UP
            </a>
          </li>
          <li>
            Images:{' '}
            <a
              href="https://unsplash.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Unsplash
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
