import React from 'react'
import { Link } from 'gatsby'

class Navbar extends React.Component {
  state = {
    active: false,
    navBarActiveClass: '',
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent kartina-mira__navbar"
        role="navigation"
        aria-label="main-navigation"
      >

        <div
          className={`navbar-burger burger ${this.state.navBarActiveClass}`}
          data-target="navMenu"
          onClick={() => this.toggleHamburger()}
        >
          <span />
          <span />
          <span />
        </div>

        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            Картина мира
          </Link>
        </div>

        <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/videos">Наши картины</Link>
            <Link className="navbar-item" to="/contacts">Контакты</Link>
            <Link className="navbar-item" to="/about">О нас</Link>
          </div>

          <div className="navbar-end">
            <a href="mailto:info@kartinamira.com" className="navbar-item">info@kartinamira.com</a>
            <a href="tel:+73833195908" className="navbar-item">+7(383)319-59-08</a>
            <a href="tel:+74992557677" className="navbar-item">+7(499)255-76-77</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
