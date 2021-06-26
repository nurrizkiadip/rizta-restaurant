/* eslint-disable linebreak-style */
import RestaurantDataSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <h2 tabindex="0" class="section-title">Detail Restaurant</h2>
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.getElementById('content');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDataSource.detail(url.id);
    content.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   restaurant: {
    //     id: restaurant.id,
    //     name: restaurant.name,
    //     description: restaurant.description,
    //     pictureId: restaurant.pictureId,
    //     city: restaurant.vote_average,
    //     rating: restaurant.vote_average,
    //   },
    });
  },
};

export default Detail;
