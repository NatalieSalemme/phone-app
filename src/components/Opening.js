import React from 'react';
import { Jumbotron, Button, Image, Row, Col } from 'react-bootstrap';

const Opening = () => (
  <Jumbotron className="opening-jumbotron" id="home">
    <Row className="opening-row">
      <Col md={4} mdOffset={2}>
        <h1>Staying In Touch Everyday</h1>
        <br />
        <p>
          I-C-It is your place for sharing, storing photos, and keeping in touch
          with friends.
        </p>
          <Button bsStyle="primary" className="opening-btn">Coming Soon</Button>

      </Col>

      <Col md={4}>
        <Image
          src="https://images.unsplash.com/photo-1425315283416-2acc50323ee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          responsive
        />
      </Col>
    </Row>
  </Jumbotron>
);
export default Opening;
