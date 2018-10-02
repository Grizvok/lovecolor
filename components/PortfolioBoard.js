import React from "react";

export default () => (
  <section className="hero is-white is-large">
    <div className="hero-head herotextcontainer">
      <div className="container has-text-centered">
        <p className="gallerytext">Gallery</p>
        <hr className="portfoliobreak" />
        <div className="container">
          <div className="columns piccontainer">
            <div className="column is-4">
              <figure class="image is-3by4">
                <img src="/static/hairpic1.jpg" />
              </figure>
              <figure class="image is-3by4">
                <img src="/static/hairpic4.jpg" />
              </figure>
            </div>
            <div className="column is-4">
              <figure class="image is-3by4">
                <img src="/static/hairpic2.jpg" />
              </figure>
              <figure class="image is-3by4">
                <img src="/static/hairpic5.jpg" />
              </figure>
            </div>
            <div className="column is-4">
              <figure class="image is-3by4">
                <img className="galleryimage" src="/static/hairpic3.jpg" />
              </figure>
              <figure class="image is-3by4">
                <img src="/static/hairpic6.jpg" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-body" />
  </section>
);
