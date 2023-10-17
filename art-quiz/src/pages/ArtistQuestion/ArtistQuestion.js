/* eslint-disable class-methods-use-this */
export default class PictureQuestion {
  render(_, dataCategory) {
    return `
      <div class="question">
        <img class="close picture__close" src="assets/close-logo.svg" alt="close">
        <p class="main__question">Which is picture?</p>
        <div class="img__container">
          <img class="artist__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/full/${dataCategory}full.jpg" alt="question">
          <img class="artist__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/full/${dataCategory}full.jpg" alt="question">
          <img class="artist__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/full/${dataCategory}full.jpg" alt="question">
          <img class="artist__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/full/${dataCategory}full.jpg" alt="question">
        </div>
          <div class="progress__dots">
            <span class="progress__dot"></span>
            <span class="progress__dot"></span>
            <span class="progress__dot"></span>
            <span class="progress__dot"></span>
            <span class="progress__dot"></span>
            <span class="progress__dot"></span>
            <span class="progress__dot"></span>
            <span class="progress__dot"></span> 
            <span class="progress__dot"></span>
            <span class="progress__dot"></span>
          </div>
      </div>
      `;
  }
}
