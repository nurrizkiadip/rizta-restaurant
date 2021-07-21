import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestoContract';
 
let favoriteRestos = [];
 
const FavoriteRestoArray = {
 
  getRestaurant(id) {
    if (!id) {
      return;
    }
 
    return favoriteRestos.find((Restaurant) => Restaurant.id == id);
  },
 
  getAllRestaurant() {
    return favoriteRestos;
  },
 
  putRestaurant(Restaurant) {
    if (!Restaurant.hasOwnProperty('id')) {
      return;
    }
 
    // pastikan id ini belum ada dalam daftar favoriteRestos
    if (this.getRestaurant(Restaurant.id)) {
      return;
    }
 
    favoriteRestos.push(Restaurant);
  },
 
  deleteRestaurant(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestos = favoriteRestos.filter((Restaurant) => Restaurant.id != id);
  },
};
 
describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestos = []);
 
  itActsAsFavoriteRestaurantModel(FavoriteRestoArray);
});