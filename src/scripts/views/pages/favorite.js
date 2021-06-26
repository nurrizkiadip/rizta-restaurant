/* eslint-disable linebreak-style */
const Favorite = {
  async render() {
    return `
      <h2 tabindex="0" class="section-title">Restaurant Favorite</h2>
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.getElementById('content');
    content.innerHTML = 'Isi Konten';
  },
};

export default Favorite;
