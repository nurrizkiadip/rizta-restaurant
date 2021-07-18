import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';
import App from './views/app';

const hamburgerBtn = document.getElementById('hamburger-button');
const navbarMenu = document.getElementById('navbar-menu');
const mainContent = document.getElementById('main-content');

const app = new App({
  button: hamburgerBtn,
  navbar: navbarMenu,
  content: mainContent,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
