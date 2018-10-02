import React from 'react';
import Link from 'next/link';

import MapComponent from './MapComponent';

export default () => (
  <div>
    <p className="contacttitle">Contact</p>
    <hr className="custombreak2" />
    <p className="contactemail">
      <i className="fas fa-envelope" /> lovecolorsalon@gmail.com
    </p>
    <p className="contactphone">
      <i className="fas fa-phone" /> 724-221-6529
    </p>
    <p className="contactmessenger">
      <i className="fab fa-facebook-messenger" />
      <a className="contactmessengerlink" href="http://m.me/lovecolorsalon"> Facebook Messenger</a>
    </p>
    <p className="studiohours">
      Salon <i className="far fa-clock" /> Hours:
    </p>
    <hr className="custombreak2" />
    <p className="contacthours">Monday: Closed</p>
    <p className="contacthours">Tuesday: 10AM-8PM</p>
    <p className="contacthours">Wednesday: 10AM-8PM</p>
    <p className="contacthours">Thursday: 10AM-8PM</p>
    <p className="contacthours">Friday: 9AM-5PM</p>
    <p className="contacthours">Saturday: 9AM-5PM</p>
    <p className="contacthours sundayhours">Sunday: Closed</p>
    <p className="studioaddress">Address:</p>
    <hr className="custombreak3" />
    <p className="address">
      832 Highway US-119
      <br />
      Greensburg, PA 15601
    </p>
    <MapComponent />
  </div>
);
