/* eslint-disable class-methods-use-this */

export default class AnswerModal {
  render() {
    return `
      <div class="answer__modal">
        <div class="current__img__wrap">
          <div class="answer"></div>
          <img src="https://raw.githubusercontent.com/Suficks/image-data/master/full/6full.jpg" alt="img" class="current__img">
        </div>
        <p class="current__name">Feast at Levi's House</p>
        <p class="current__author">Claude Mone</p>
        <p class="current__year">1885</p>
        <button class="next__button">Next</button>
      </div>
    `;
  }

  modalToggle() {
    const answers = document.querySelectorAll('.question__btn');
    const pictures = document.querySelectorAll('.artist__img');
    const nextBtn = document.querySelector('.next__button');

    answers?.forEach((item) => {
      new AnswerModal().modalToggleSetListener(item);
    });

    pictures?.forEach((item) => {
      new AnswerModal().modalToggleSetListener(item);
    });

    new AnswerModal().modalToggleSetListener(nextBtn);
  }

  modalToggleSetListener(btn) {
    const answerModal = document.querySelector('.answer__modal');
    const overlay = document.querySelector('.overlay');

    btn.addEventListener('click', () => {
      answerModal.classList.toggle('answer__modal__active');
      overlay.classList.toggle('overlay__active');
    });
  }
}
