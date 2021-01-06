import * as React from 'react';

import pic8 from '../assets/images/aChristine.jpeg';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="image fit-profile">
          <img src={pic8} alt="Christine Pink" />
        </div>
        <h2>Christine Pink</h2>
        <p>
          Assistant Principal, Project Manager, Life-Long Learner, & Empowering
          Others.
        </p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Assistant Principal</h2>
            <p>
              Experienced Program Specialist with a demonstrated history of
              working in the primary/secondary education industry. Skilled in
              Coaching & Mentoring, Curriculum Development, Public Speaking,
              Training, and Teaching. Strong professional with a Master of
              Education - MEd focused in Educational Leadership and
              Administration, General from Stetson University.
            </p>
            <p className="special">MY WORK</p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">PROJECT MANAGER</h2>
            <p>
              We all enjoy proper expectations are set around what can be
              delivered, by when, and for how much. I am responsible for
              planning, overseeing, discussing projects to ensure they are
              completed in a timely scope and valuable to the client. We love
              Basecamp.
            </p>
            <p className="special">OUR BUSINESS</p>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">GET IN TOUCH</h2>
            <ul className="icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/christine-rosado-4432a5182/"
                  className="icon fa-linkedin"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/COACHCHRISTINEPINK"
                  className="icon fa-facebook"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/coachchristinepink/"
                  className="icon fa-instagram"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/christinepink"
                  className="icon fa-twitter"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/christinepink"
                  className="icon fa-github"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                  <span className="label">Github</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
