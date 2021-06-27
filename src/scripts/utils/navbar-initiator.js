/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

const NavbarInitiator = {
  init({ button, navbar }) {
    const hamburger = button;
    hamburger.tabIndex = 0;

    hamburger.addEventListener('click', (event) => {
      this._toggleNavbar(event, navbar);
      hamburger.classList.toggle('active');
    });

    document.querySelectorAll('header, main, footer').forEach((body) => {
      body.addEventListener('click', (event) => {
        if (this._closeNavbar(event, navbar)) {
          hamburger.classList.remove('active');
        }
      });
    });
  },

  _toggleNavbar(event, navbar) {
    event.stopPropagation();
    navbar.classList.toggle('active');
  },

  _closeNavbar(event, navbar) {
    event.stopPropagation();
    navbar.classList.remove('active');
    return true;
  },
};

export default NavbarInitiator;
