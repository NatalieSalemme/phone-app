import React from 'react';
import Card from './Card';

const Identity = () => (
  <div className="identity-container" id="technology">
    <h1>Create an Identity, Redefine your life &reg;</h1>
    <h3>
      I-C-It helps you share your life with your communities, one post at a
      time.
    </h3>
    <iframe
      className="identity-vid"
      width="750"
      height="450"
      src="https://www.youtube.com/embed/znz8o-boH0E"
      title="Phone review"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <div className="card-container">
      <Card
        title="Create Your Identity"
        bullet1="Create your unique identity for each profile"
        bullet2="Share your posts over our secure network"
        bullet3="Send and accept connection requests in order to stay in touch"
      />

      <Card
        title="Connect"
        bullet1="Create unlimited connections by connecting to all of your social media accounts"
        bullet2="Assign each person into a category so they only see what you want them to see"
        bullet3="Go through our easy tutorial to see all of the extra perks I-C-It has to offer"
      />

      <Card
        title="Secure Messaging"
        bullet1="Share your photos, messages, and other files with your connections, defining which groups you would like to share it with"
        bullet2="Use instant messaging with your connections to connect to them faster than ever"
        bullet3="All data is encrypted and will not be shared with any 3rd party resources"
      />

      <Card
        title="Encrypted Storage"
        bullet1="Store bitcoin and other forms of currency in an I-C-It wallet"
        bullet2="See a live view of the current value of your currency wallet"
        bullet3="Safely exchange coins with your connections through our secure network"
      />

      <Card
        title="Friendship History"
        bullet1="With a click of a button, be able to see when you connected with someone"
        bullet2="Explore other connections in the 2nd, 3rd and 4th degree"
        bullet3="Select up to 4 people to find all photos that include all the tagged people"
      />

      <Card
        title="Track Your Activity"
        bullet1="See how much time you have been on I-C-It"
        bullet2="Set up reminders to rest your eyes or set up a to-do list for yourself"
        bullet3="Connect your fitbit/Apple Watch or your phone to I-C-It and it will analyze your exercise for the day"
      />

      <h3>
        Our users value their privacy and I-C-It's innovative software. We
        frequently look at user feedback and release new versions of the
        application
      </h3>
    </div>
  </div>
);
export default Identity;
