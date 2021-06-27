import RestaurantDataSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
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

    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('favorite-btn-container'),
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
