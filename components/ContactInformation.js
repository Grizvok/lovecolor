import React from 'react';

import MapComponent from "./MapComponent";

export default () => (
  <div>
    <p className="contacttitle">Contact</p>
    <hr className="custombreak2"/>
    <p className="contactemail">lovecolorsalon@gmail.com</p>
    <p className="contactphone">Tel: 724-221-6529</p>
    <p className="studiohours">Studio Hours:</p>
    <hr className="custombreak2"/>
    <p className="contacthours">Monday: Closed</p>
    <p className="contacthours">Tuesday: 10AM-8PM</p>
    <p className="contacthours">Wednesday: 10AM-8PM</p>
    <p className="contacthours">Thursday: 10AM-8PM</p>
    <p className="contacthours">Friday: 9AM-5PM</p>
    <p className="contacthours">Saturday: 9AM-5PM</p>
    <p className="contacthours">Sunday: Closed</p>
    <p className="studioaddress">Studio Address:</p>
    <hr className="custombreak2"/>
    <p className="address">
      832 Highway US-119<br/>
      Greensburg, PA 15601
    </p>
    <p className="studiomap">Studio Map</p>
    <hr className="custombreak2"/>
    <MapComponent />
  </div>
);
