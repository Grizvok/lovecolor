import React from 'react';

export default () => (
  <div className="columns is-centered is-mobile">
    <div className="column is-one-third-desktop is-half-mobile">
      <div className="card is-4">
        <div className="card-image is-small">
          <figure className="image is-small is-square is-3by4">
            <img src="/static/hairpic1.jpg" alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content has-text-centered is-size-7-mobile">
              <p>Color | Cut | Extensions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
