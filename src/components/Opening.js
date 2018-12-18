import React from 'react';
import { Jumbotron, Button, Image, Row, Col } from 'react-bootstrap';

const Opening = () => (
  <Jumbotron className="opening-jumbotron" id="home">
  <div className="opening-container"></div>
    <Row className="opening-row">
      <Col md={4} mdOffset={2}
      className="opening-col-1" >
        <h1 className="opening-header">Staying In Touch Everyday</h1>
        <br />
        <p className="opening-p">
          I-C-It is your place for sharing, storing photos, and keeping in touch
          with friends.
        </p>
        <Button bsStyle="primary" className="opening-btn">
          Coming Soon
        </Button>
      </Col>

      <Col md={4}>
        <Image
          className="opening-img"
          alt="Phone"
          src="http://www.stickpng.com/assets/images/58aefaaac869e092af51ee66.png"
          responsive
        />
      </Col>
    </Row>
  </Jumbotron>
);
export default Opening;
