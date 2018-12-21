import React from 'react';
import { Col, Image } from 'react-bootstrap';

const Technology = () => (
  <div className="technology-container">
  <Col md={6}>
      <Image
        className="technology-img"
        src={require('../images/landscape.jpg')}
        alt="#"
      />
    </Col>
    <Col md={6}>
      <div className="technology-content">
        <h1>Technology</h1>
        <h3>A million posts, a million happy users.
          <br />
          Best site to protect your life!</h3>

        <p>I-C-It makes user privacy it's number 1 priority. We are here ot ensure that our users are able to share their information, photos, and other documents in a secure and private way. We also encourage multiple profiles to separate what groups of friends you want to share your posts with.</p>

        <br />
        <p>We offer state of the art technology that lets users have the option to integrate the contacts from their phone, email, or social media with I-C-It. From here, our technology is able to suggest which groups you should categorize connections. Connections can only be in 1 group, so you don't have to worry about accidentally adding someone to another group.</p>

      </div>
    </Col>
  </div>
);
export default Technology;
