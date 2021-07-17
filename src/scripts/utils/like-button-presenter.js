import { createFavRestoButtonTemplate, createUnfavRestoButtonTemplate } from '../views/templates/template-creator';
// import Feedback from './feedback-initiator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteResto, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteResto = favoriteResto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
      // Feedback.favoritedFeedbackShow();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteResto.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createFavRestoButtonTemplate();

    const likeButton = document.getElementById('favorite-btn');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnfavRestoButtonTemplate();

    const likeButton = document.getElementById('favorite-btn');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
