import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="favorite-btn-container"></div>';
};

describe('Liking A Restaurant', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    // ekspektasi tomboj tambah muncul
    expect(document.querySelector('[aria-label="Add this restaurant to favorite"]')).toBeTruthy();

    // ekspektasi tomboh unlike muncul
    expect(document.querySelector('[aria-label="Remove this restaurant from favorite"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    document.getElementById('favorite-btn').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    // harus didelete terlebih dahulu
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a movie again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.getElementById('favorite-btn').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({  });

    document.getElementById('favorite-btn').dispatchEvent(new Event('click'));
   
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
