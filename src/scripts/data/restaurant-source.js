/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDataSource {
  static async getList() {
    console.log(`API:${API_ENDPOINT.LIST}`);

    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    console.log(`Result List .json()\n${responseJson}`);
    console.log(`Result List results\n${responseJson.restaurants[0]}`);
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(`Result detail id\n${id} ${API_ENDPOINT.DETAIL(id)}`);
    console.log(`Result detail no .json()\n${responseJson.restaurant}`);

    return responseJson.restaurant;
  }
}

export default RestaurantDataSource;
