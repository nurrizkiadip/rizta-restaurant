import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="favorite-btn-container"></div>';
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  // seharusnya menampilkan tombol unfavorite yang telah di sukai
  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.initialFavButtonPresenterResto({ id: 1 });

    expect(document.querySelector('[aria-label="Remove this restaurant from favorite"]')).toBeTruthy();
  });

  // seharusnya tidak menampilkan tombol favorite yang telah di sukai
  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.initialFavButtonPresenterResto({ id: 1 });

    expect(document.querySelector('[aria-label="Add this restaurant to favorite"]')).toBeFalsy();
  });

  // harus bisa menghilangkan resto favorite dari daftar restaurant
  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.initialFavButtonPresenterResto({ id: 1 });

    document.querySelector('[aria-label="Remove this restaurant from favorite"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  // harus bisa mengembalikan error ketika berusaha klik tombol favorite pada resto yang unfavorite yg tidak ada di daftar restaurant
  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.initialFavButtonPresenterResto({ id: 1 });

    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="Remove this restaurant from favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
