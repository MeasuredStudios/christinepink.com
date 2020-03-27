import React from 'react';

export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <div className="row">
          <div className="col-12 col-12-medium">
            <ul className="icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/christine-rosado-4432a5182/"
                  className="icon fa-linkedin"
                  rel="noopener"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/COACHCHRISTINEPINK"
                  className="icon fa-facebook"
                  rel="noopener"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/coachchristinepink/"
                  className="icon fa-instagram"
                  rel="noopener"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/christinepink"
                  className="icon fa-twitter"
                  rel="noopener"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="label">Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="copyright">
          <li>
            &copy;:{' '}
            <a
              href="https://www.measuredstudios.com/"
              rel="noopener"
              rel="noreferrer"
              target="_blank"
            >
              Measured Studios
            </a>
          </li>
          <li>
            Design:{' '}
            <a
              href="https://html5up.net"
              rel="noopener"
              rel="noreferrer"
              target="_blank"
            >
              HTML5 UP
            </a>
          </li>
          <li>
            Images:{' '}
            <a
              href="https://unsplash.com/"
              rel="noopener"
              rel="noreferrer"
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
