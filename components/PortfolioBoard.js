import React from "react";
import PortfolioHero from '../components/PortfolioHero';

export default () => (
  <section className="hero is-white is-large">
    <div className="hero-head herotextcontainer">
      <div className="container has-text-centered">
      <section className="container hero is-medium gallerycontainer">
        </section>
        <div className="container">
          <div className="columns piccontainer">
            <div className="column is-4">
              <figure className="galleryimage image is-3by4">
                <img src="/static/hairpic1.jpg" />
              </figure>
              <figure className="galleryimage image is-3by4">
                <img src="/static/hairpic8.jpg" />
              </figure>
              <figure className="galleryimage image is-3by4">
                <img src="/static/hairpic4.jpg" />
              </figure>
              
            </div>
            <div className="column is-4">
              <figure className="galleryimage image is-3by4">
                <img src="/static/hairpic2.jpg" />
              </figure>
              <figure className="galleryimage image is-3by4">
                <img src="/static/hairpic9.jpg" />
              </figure>
              <figure className="galleryimage image is-3by4">
                <img src="/static/hairpic5.jpg" />
              </figure>
            </div>
            <div className="column is-4">
              <figure className="galleryimage image is-3by4">
                <img src="/static/hairpic3.jpg" />
              </figure>
              <figure className="galleryimage image is-3by4">
                <img src="/static/hairpic6.jpg" />
              </figure>
              <figure className="galleryimage image is-3by4">
                <img src="/static/hairpic11.jpg" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-body" />
  </section>
);
