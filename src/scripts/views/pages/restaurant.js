/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import RestaurantDataSource from '../../data/restaurant-source';
import { createRestaurantItemCardTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
      <h2 tabindex="0" class="section-title">Restaurants</h2>
      <div class="content" id="content">
        <ul class="card-heros">
        </ul>
      </div>
    `;
  },

  async afterRender() {
    console.log('Rendering Restaurant...');
    const content = document.querySelector('#content .card-heros');
    const datas = await RestaurantDataSource.getList();
    datas.forEach((data) => {
      content.innerHTML += createRestaurantItemCardTemplate(data);
    });
  },
};

export default Restaurant;
