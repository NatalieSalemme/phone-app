import React from 'react';
import { Col, Image } from 'react-bootstrap';

const About = () => (
  <div id="about" className="about-container">
    <Col md={6}>
      <Image
        className="about-img"
        alt="Natalie Salemme" src="http://i67.tinypic.com/16hqnbr.jpg" responsive />
        <p>Co-founder: Natalie Salemme</p>

    </Col>
    <Col md={6}>
    <h1>About</h1>
    <p>I-C-It started out as an idea in 2016. The founder, Natalie Salemme, wanted a way to be able to combine all social media accounts and be able to do everything from one single place. In 2017, our company made the decision to welcome exchanging currencies. In addition to bitcoin, we now offer all the other major online currency exchanges as well. We understand that being able to have easy access to exchanging these currencies is very important to our users. </p>
    <p>Our company also wanted to make sure to reduce the space on your phone when using I-C-It. Instead of downloading many different apps on your phone, I-C-It can be downloaded at less than a quarter of a gigabyte. With the ability to share photos, posts, and exchange currency, we believe that this is the all-in-1 app to have right now and in the future.  </p>
  </Col>
  </div>
);
export default About;
