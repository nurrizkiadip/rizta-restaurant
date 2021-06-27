import { createContactUsTemplate } from '../templates/template-creator';

const ContactUs = {
  async render() {
    return `
      <h2 tabindex="0" class="section-title">Contant Us</h2>
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.getElementById('content');
    content.innerHTML = createContactUsTemplate;
  },
};

export default ContactUs;
