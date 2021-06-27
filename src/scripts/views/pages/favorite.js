/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemCardTemplate, noFavoriteData } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <h2 tabindex="0" class="section-title">Restaurant Favorite</h2>
      <div class="content" id="content">
        <ul class="card-heros">
          <div id="loader-show"></div>
        </ul>
      </div>
    `;
  },

  async afterRender() {
    const restaurantFavd = await FavoriteRestaurantIdb.getAllRestaurant();
    const content = document.querySelector('#content .card-heros');
    content.innerHTML = '';

    if (restaurantFavd === undefined || restaurantFavd.length === 0) {
      content.innerHTML = `
        ${noFavoriteData}
        <p>No Favorite Data</p>
      `;
      return;
    }

    restaurantFavd.forEach((restaurant) => {
      content.innerHTML += createRestaurantItemCardTemplate(restaurant);
    });
  },
};

export default Favorite;
