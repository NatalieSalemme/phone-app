import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';

const FAQ = () => (
  <div >
    <h1 className="faq-header"> FAQs</h1>
  <PanelGroup accordion
    className="panel-container" id="accordion-example">
    <Panel eventKey="1">
      <Panel.Heading>
        <Panel.Title toggle>Does I-C-It cost money to use?</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible >
      Currently, all features are available to our users for free. We do not plan on charging our users for any sort of premium content. We are lucky to be able to maintain our website due to the support of our sponsors.
      </Panel.Body>
    </Panel>
    <Panel eventKey="2">
      <Panel.Heading>
        <Panel.Title toggle>Do you sell our personal information?</Panel.Title>
      </Panel.Heading>
      <Panel.Body  collapsible>
        We respect our users' privacy and would never sell any of our users' information to 3rd party businessess. All your information that you put up on your profile is considered your own property and you will not have to worry about anything being sold or sent to someone else.
      </Panel.Body>
    </Panel>
    <Panel eventKey="3">
      <Panel.Heading>
        <Panel.Title toggle>How many profiles can I use?</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
        You are able to have as many profiles as you would like, the possibilities are endless. For organizational purposes, if you have an empty group profile with no connections on it for 90 consecutive days, we will send you a reminder to delete or keep it.
      </Panel.Body>
    </Panel>
    <Panel eventKey="4">
      <Panel.Heading>
        <Panel.Title toggle>What do I do if I forgot my password?</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
        On the login page, you will be able to see a "forgot password". It will send an e-mail to the e-mail on file and you will be able to reset your password from there.
      </Panel.Body>
    </Panel>
    <Panel eventKey="5">
      <Panel.Heading>
        <Panel.Title toggle>How much currency can I exchange?</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible >
        You are able to exchange up to $6000 USD per month. Before you are able to exchange, we require that you confirm your identity. Then we will send a small amount to your currency wallet so you can verify the amount. Once that is complete(typically within 24 hours), we will send you an e-mail.
      </Panel.Body>
    </Panel>
  </PanelGroup>
</div>

)
export default FAQ;
