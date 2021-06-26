/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import NavbarInitiator from '../utils/navbar-initiator';

class App {
  constructor({ button, navbar, content }) {
    this._button = button;
    this._navbar = navbar;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    NavbarInitiator.init({
      button: this._button,
      navbar: this._navbar,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
