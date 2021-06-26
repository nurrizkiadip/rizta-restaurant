/* eslint-disable linebreak-style */
import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantItemCardTemplate = (restaurant) => `
  <li class="card">
    <a href="/#/detail/${restaurant.id}"><div class="card-avatar">
      <img tabindex="0" class="card-image" src="${API_ENDPOINT.LOAD_IMAGE_MD(restaurant.pictureId)}" alt="Gambar ${restaurant.name}">
      <div class="caption-img">
        <span class="rating"><i class="fas fa-star"></i>${restaurant.rating}</span>
        <span class="city"><i class="fas fa-map-marker-alt"></i>${restaurant.city}</span>
      </div>
    </div></a>
    <div class="card-body">
      <span class="id">${restaurant.id}</span>
      
      <h3 tabindex="0" class="name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p tabindex="0" class="description">${restaurant.description}</p>  
    </div>
  </li>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail-container">
    <h2 class="restaurant-name">${restaurant.name}</h2>
    <div class="poster-content">
      <img class="restaurant-poster" src="${API_ENDPOINT.LOAD_IMAGE_LG(restaurant.pictureId)}" alt="${restaurant.name}" />
    </div>
    <div class="restaurant-info">
      <h3 class="sub-info-title">Information</h3>
      <h4>Kota</h4>
      <p>${restaurant.city}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
    </div>
    <div class="restaurant-desc">
      <h3 class="sub-info-title">Description</h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createFavButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavdButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemCardTemplate,
  createRestaurantDetailTemplate,
  createFavButtonTemplate,
  createFavdButtonTemplate,
};
