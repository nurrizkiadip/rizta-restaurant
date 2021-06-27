const Feedback = {
  favoritedFeedbackShow() {
    const favorited = document.getElementById('favorited-feedback');
    favorited.classList.add = 'show';
    setTimeout(this.favoritedFeedbackHidden(favorited), 500);
  },
  favoritedFeedbackHidden(element) {
    element.classList.remove = 'show';
  },

};

export default Feedback;
