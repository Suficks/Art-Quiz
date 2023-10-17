export default class PictureQuestion {
  render() {
    return `
      <div class="question">
        <img class="close picture__close" src="assets/close-logo.svg" alt="close">
        <p class="main__question">Who is the author of this picture?</p>
        <img class="question__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/full/0full.jpg" alt="question">
        <div class="buttons__wrap">
          <button class="question__btn">Константин Маковский</button>
          <button class="question__btn">Константин Маковский</button>
          <button class="question__btn">Константин Маковский</button>
          <button class="question__btn">Константин Маковский</button>
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
