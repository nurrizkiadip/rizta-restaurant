const Feedback = {
  favoritedFeedbackShow() {
    const favorited = document.getElementById('favorited-feedback');
    favorited.classList.add = 'show';
    setTimeout(() => {
      favorited.classList.remove = 'show';
    }, 500);
  },

};

export default Feedback;
