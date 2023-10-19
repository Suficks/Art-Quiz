/* eslint-disable class-methods-use-this */

import QuitModal from '../QuitModal';
import AnswerModal from '../AnswerModal';

export default class PictureQuestion {
  constructor() {
    this.state = {
      pictureNum: 0,
      data: [],
    };
  }

  async render(_, dataCategory) {
    this.state.pictureNum = +dataCategory || this.state.pictureNum;

    await this.dataFetch();

    const mainContainer = document.querySelector('.main__wrapper');

    const template = `
      <div class="question">
        <img class="close picture__close" src="assets/close-logo.svg" alt="close">
        <p class="main__question">Who is the author of this picture?</p>
        <img class="question__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/img/${this.state.pictureNum}.jpg" alt="question">
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
        ${new AnswerModal().render()}
        ${new QuitModal().render('Pictures')}
        <div class="overlay"></div>
      </div >
    `;

    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', template);
    this.getAuthors();
    new AnswerModal().modalToggle();
    new QuitModal().modalToggle();
    // setEventListener();
    this.nextQuestion();
  }

  async dataFetch() {
    const url = 'https://raw.githubusercontent.com/Suficks/image-data/master/images.json';
    const res = await fetch(url);
    this.state.data = await res.json();
  }

  getAuthors() {
    const { pictureNum, data } = this.state;
    const buttonContainer = document.querySelector('.buttons__wrap');

    const buttons = [...new Set()];

    const correctAnswer = data[pictureNum].author;
    const correctButton = `<button class="question__btn">${correctAnswer}</button>`;
    buttons.push(correctButton);

    for (let i = 0; i < 3; i += 1) {
      const randomAuthor = Math.floor(Math.random() * 240);
      const { author } = data[randomAuthor];
      const button = `<button class="question__btn">${author}</button>`;
      buttons.push(button);
    }
    this.shuffle(buttons);
    buttonContainer.innerHTML = '';
    buttons.forEach((item) => {
      buttonContainer.insertAdjacentHTML('beforeend', item);
    });
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  nextQuestion() {
    const nextBtn = document.querySelector('.next__button');

    nextBtn.addEventListener('click', () => {
      const questionPic = document.querySelector('.question__img');
      this.state.pictureNum += 1;
      questionPic.src = `https://raw.githubusercontent.com/Suficks/image-data/master/img/${this.state.pictureNum}.jpg`;
      this.render();
    });
  }
}
