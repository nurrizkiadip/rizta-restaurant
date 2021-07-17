import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantDataSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <h2 tabindex="0" class="section-title">Detail Restaurant</h2>
      <div class="content" id="content">
        <div id="loader-show"></div>
      </div>
      <div id="favorite-btn-container"></div>
    `;
  },

  async afterRender() {
    const content = document.getElementById('content');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDataSource.detail(url.id);
    content.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.getElementById('favorite-btn-container'),
      favoriteResto: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
