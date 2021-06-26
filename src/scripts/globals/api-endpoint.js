/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  LOAD_IMAGE_SM: (id) => `${CONFIG.BASE_URL}images/small/${id}`,
  LOAD_IMAGE_MD: (id) => `${CONFIG.BASE_URL}images/medium/${id}`,
  LOAD_IMAGE_LG: (id) => `${CONFIG.BASE_URL}images/large/${id}`,
};

export default API_ENDPOINT;
