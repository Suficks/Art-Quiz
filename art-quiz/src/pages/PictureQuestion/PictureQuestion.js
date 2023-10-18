/* eslint-disable class-methods-use-this */

import QuitModal from '../QuitModal';
import AnswerModal from '../AnswerModal';

export default class PictureQuestion {
  render(_, dataCategory) {
    return `
      <div class="question">
        <img class="close picture__close" src="assets/close-logo.svg" alt="close">
        <p class="main__question">Who is the author of this picture?</p>
        <img class="question__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/full/${dataCategory}full.jpg" alt="question">
        <div class="buttons__wrap"></div>
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
        ${new AnswerModal().render('PictureQuestion')}
        ${new QuitModal().render('Pictures')}
        <div class="overlay"></div>
      </div >
  `;
  }

  async dataFetch() {
    const url = 'https://raw.githubusercontent.com/Suficks/image-data/master/images.json';
    const res = await fetch(url);
    const data = await res.json();
    this.getAuthors(data);
    new AnswerModal().modalToggle();
  }

  getAuthors(data) {
    let buttons = '';
    const buttonContainer = document.querySelector('.buttons__wrap');

    for (let i = 0; i < 4; i += 1) {
      const randomAuthor = Math.floor(Math.random() * 240);
      const { author } = data[randomAuthor];
      const button = `<button class="question__btn">${author}</button>`;
      buttons += button;
    }
    buttonContainer.insertAdjacentHTML('beforeend', buttons);
  }
}
