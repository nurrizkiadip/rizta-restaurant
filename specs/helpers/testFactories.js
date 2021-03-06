import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';
 
const initialFavButtonPresenterResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.getElementById('favorite-btn-container'),
    favoriteResto: FavoriteRestaurantIdb,
    restaurant,
  });
};
 
export { initialFavButtonPresenterResto };