/* eslint-disable linebreak-style */
import RestaurantDataSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import Feedback from '../../utils/feedback-initiator';
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

    const submitReview = document.getElementById('review-submit-btn');
    submitReview.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = document.getElementById('name-input').value;
      const review = document.getElementById('review-input').value;

      // const options = { year: 'numeric', month: 'long', day: 'numeric' };
      // const date = new Date();
      // const dateTimeFormat = new Intl.DateTimeFormat('id', options).format(date);
      // expected output: "27 Juni 2021"

      // console.log(name, review, dateTimeFormat);

      if (name !== '' && review !== '') {
        RestaurantDataSource.postReview({
          'id': url.id,
          'name': name,
          'review': review,
        });
      }
    });

    // Feedback.favoritedFeedbackShow();

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
