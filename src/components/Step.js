import React from 'react';
import { Grid, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Step extends React.Component {
  render() {
    console.log(this.props.image);
    return (
      <div className="step">
        <Col md={4}>
          <h1>{this.props.number}</h1>
        </Col>
        <Col md={6}>
          <FontAwesomeIcon icon={this.props.image} className="icon" />
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </Col>
      </div>
    );
  }
}

export default Step;
