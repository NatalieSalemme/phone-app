import React from 'react';
import Step from './Step';


import {
  faDownload,
  faCogs,
  faGlobe,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

const Steps = props => (
  <div className="steps-container">
    <Step
      number="1"
      image={faDownload}
      title="Download"
      description="Download our app from the app store "
    />
    <Step
      number="2"
      image={faCogs}
      title="Create"
      description="Create your profile and customize your settings"
    />
    <Step
      number="3"
      image={faGlobe}
      title="Connect"
      description="Use any social accounts or contacts to add people to your I-C-It account"
    />
    <Step
      number="4"
      image={faComment}
      title="Post"
      description="Post a status, a photo or a document for your connection groups to see"
    />
  </div>
);
export default Steps;
