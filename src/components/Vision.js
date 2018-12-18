import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import WOW from 'wowjs';


class Vision extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <Row className="vision-container" id="vision">
      <Col className="vision-content" md={4} mdOffset={2}>
        <h1>Vision</h1>
        <h3>Making your personal life truly personal</h3>

       <p>With our state of the art software, we are looking to expand the way users interact with eachother. In the future, we are planning on new ways to share posts, photos, and documents. With our encryption techniques, we are hoping to combine e-mail accounts, texts and social media notifications all into 1 application, I-C-It. This will not only save precious time for our users, but be a great way to manage all of your notifications in one place. </p>
       <p>We would like to make exchanging money easier for our users. We have partnered up with several cryptocurrency companies to find ways to make exchanging currency as seamless as possible. With a click of the button, users will be able to see the going rate for each currency and sell it with a click of the button. We will ensure that you are getting the lowest transaction fees possible whne using our transfer software.</p>

      </Col>
      <Col md={6} className='vision-col-2'>
        <Image

          className="wow slideInUp vision-back-img" src="https://www.freeiconspng.com/uploads/iphone-6-png-10.png" responsive />
          <Image
            className="wow slideInUp vision-front-img delay-1s fast" src="https://www.freeiconspng.com/uploads/iphone-6-png-10.png" responsive />
      </Col>
    </Row>
  );
  }
}


export default Vision;
