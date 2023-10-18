/* eslint-disable class-methods-use-this */
export default class PictureQuestion {
  constructor() {
    this.authors = [];
  }

  render(_, dataCategory) {
    let data;
    this.fetchAuthors().then((res) => { data = res; console.log(data); });
    return `
      <div class="question">
        <img class="close picture__close" src="assets/close-logo.svg" alt="close">
        <p class="main__question">Who is the author of this picture?</p>
        <img class="question__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/full/${dataCategory}full.jpg" alt="question">
        <div class="buttons__wrap">
          <button class="question__btn">Claude Monet</button>
          <button class="question__btn">Claude Monet</button>
          <button class="question__btn">Claude Monet</button>
          <button class="question__btn">Claude Monet</button>
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
        <div class="answerModal">
          <div class="current__img__wrap">
            <div class="answer"></div>
            <img src="https://raw.githubusercontent.com/Suficks/image-data/master/full/6full.jpg" alt="img" class="current__img">
          </div>
          <p class="current__name">Feast at Levi's House</p>
          <p class="current__author">Claude Mone</p>
          <p class="current__year">1885</p>
          <button class="next__button button__controller" data-page="PictureQuestion">Next</button>
        </div>
        <div class="quit__game__modal">
          <img class="close picture__close" src="assets/close-logo-black.svg" alt="close">
          <p class="quit__text">Do you really want to quit the game?</p>
          <div class="buttons__wrap">
            <button class="button">Cancel</button>
            <button class="button yes__btn">Yes</button>
          </div>
        </div>
        <div class="overlay"></div>
      </div>
      `;
  }

  async fetchAuthors() {
    const url = 'https://raw.githubusercontent.com/Suficks/image-data/master/images.json';
    const res = await fetch(url);
    const data = await res.json();

    let buttons = '';

    for (let i = 0; i < 4; i += 1) {
      const randomAuthor = Math.floor(Math.random() * 240);
      const { author } = data[randomAuthor];
      const button = `<button class="question__btn" data-page="Modal">${author}</button>`;
      buttons += button;
    }
    return buttons;
  }

  modalOpen() {
    const answers = document.querySelectorAll('.question__btn');
    const answerModal = document.querySelector('.answerModal');
    const overlay = document.querySelector('.overlay');

    answers.forEach((item) => {
      item.addEventListener('click', () => {
        answerModal.classList.add('answerModal__active');
        overlay.classList.add('overlay__active');
      });
    });
  }
}
