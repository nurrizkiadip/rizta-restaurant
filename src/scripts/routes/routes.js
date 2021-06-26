/* eslint-disable linebreak-style */
import Restaurant from '../views/pages/restaurant';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import ContactUs from '../views/pages/contact-us';

const routes = {
  '/': Restaurant,
  '/home': Restaurant,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/contact-us': ContactUs,
};

export default routes;
