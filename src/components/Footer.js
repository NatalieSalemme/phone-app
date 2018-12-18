import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => (
  <div className="footer">
    <div className="social-icons">
      <a href="http://www.twitter.com">
   <FontAwesomeIcon icon={['fab', 'twitter']} /></a>
   <a href="http://www.facebook.com">
    <FontAwesomeIcon icon={['fab', 'facebook']} /></a>
    <a href="http://www.instagram.com">
     <FontAwesomeIcon icon={['fab', 'instagram']} /></a>
</div>
  </div>
);
export default Footer;
