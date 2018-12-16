import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Product = () => (
  <div className="product-container" id="product">

      <Row>
        <Col md={4}>
          <Image
            className="product-img"
            alt="Man taking photo of flower with his phone"
            src="https://images.unsplash.com/photo-1506651303478-f5207c4be517?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            responsive
          />
        </Col>
        <Col md={4} mdOffset={2} className="product-content" >
          <h1>Share memories, create different groups for the people you know</h1>
          <br />
          <p>
            Our unique product allows users to create different profiles for the different groups in their life, whether that be for friends, family, or co-workers.
          <br />
          <br />
            We have all been in that situation where someone asks you for your social media accounts and you try to quickly recall everything that is on your account to see if that would be appropriate for this person. Maybe you don't want them to know everything about your personal life, maybe you do. That's where I-C-It comes  in.
          <br />
          <br />
            Create new profiles with ease with our state of the art software. When you post something on your main page, you are able to filter it to your many profiles. All messages and comments will come through to your main account. The only difference is what other people will see on your account.
          <br />
          <br />
            One of the greatest features of this product is that your friends and family will not know which group you have placed them in! Your information is safe with I-C-It.
          </p>
        </Col>


      </Row>
  </div>
);
export default Product;
