/* eslint-disable class-methods-use-this */

import QuitModal from '../QuitModal';
import AnswerModal from '../AnswerModal';

export default class ArtistQuestion {
  render(_, dataCategory) {
    const mainContainer = document.querySelector('.main__wrapper');

    const template = `
      <div class="question">
        <img class="close picture__close" src="assets/close-logo.svg" alt="close">
        <p class="main__question">Which is picture?</p>
        <div class="img__container">
          <img class="artist__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/img/${dataCategory}.jpg" alt="question">
          <img class="artist__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/img/${dataCategory}.jpg" alt="question">
          <img class="artist__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/img/${dataCategory}.jpg" alt="question">
          <img class="artist__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/img/${dataCategory}.jpg" alt="question">
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
        ${new AnswerModal().render('ArtistQuestion')}
        ${new QuitModal().render('Artist')}
        <div class="overlay"></div>
      </div>
      `;

    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', template);
    new QuitModal().modalToggle();
  }
}
