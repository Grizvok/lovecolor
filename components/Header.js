//npm packages
import React from 'react';
import Link from 'next/link';

//our packages

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('#' + burger.dataset.target);

    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  }

  render() {
    return (
      <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link prefetch href="/">
              <a className="navbar-item">
               Love Color
              </a>
            </Link>
            <span
              onClick={this.handleClick}
              className="navbar-burger burger"
              data-target="navMenu"
            >
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-end">
              <Link prefetch href="/services">
                <a className="navbar-item">Services</a>
              </Link>
              <Link prefetch href="/portfolio">
                <a className="navbar-item">Portfolio</a>
              </Link>
              <Link prefetch href="/contact">
                <a className="navbar-item">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;