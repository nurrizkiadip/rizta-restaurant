/* eslint-disable linebreak-style */
const ContactUs = {
  async render() {
    return `
      <h2 tabindex="0" class="section-title">Contant Us</h2>
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.getElementById('content');
    content.innerHTML = 'Isi Konten';
  },
};

export default ContactUs;
