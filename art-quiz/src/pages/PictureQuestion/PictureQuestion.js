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
        <div class="answer__modal">
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
          <img class="close modal__close" src="assets/close-logo-black.svg" alt="close">
          <p class="quit__text">Do you really want to quit the game?</p>
          <div class="quit__buttons__wrap">
            <button class="button cancel__btn">Cancel</button>
            <button class="button button__controller" data-page="Pictures">Yes</button>
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

  modalToggle() {
    const answers = document.querySelectorAll('.question__btn');

    const answerModal = document.querySelector('.answer__modal');
    const quitGameModal = document.querySelector('.quit__game__modal');

    const overlay = document.querySelector('.overlay');

    const quitGameBtn = document.querySelector('.picture__close');
    const closeModalBtn = document.querySelector('.modal__close');
    const cancelBtn = document.querySelector('.cancel__btn');

    answers.forEach((item) => {
      this.modalToggleSetListener(item, answerModal, overlay);
    });

    this.modalToggleSetListener(quitGameBtn, quitGameModal, overlay);
    this.modalToggleSetListener(closeModalBtn, quitGameModal, overlay);
    this.modalToggleSetListener(cancelBtn, quitGameModal, overlay);
  }

  modalToggleSetListener(btn, modal, overlay) {
    btn.addEventListener('click', () => {
      modal.classList.toggle('quit__game__modal__active');
      overlay.classList.toggle('overlay__active');
    });
  }
}
