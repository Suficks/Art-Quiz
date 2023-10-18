/* eslint-disable class-methods-use-this */
export default class AnswerModal {
  render(page) {
    return `
      <div class="answer__modal">
        <div class="current__img__wrap">
          <div class="answer"></div>
          <img src="https://raw.githubusercontent.com/Suficks/image-data/master/full/6full.jpg" alt="img" class="current__img">
        </div>
        <p class="current__name">Feast at Levi's House</p>
        <p class="current__author">Claude Mone</p>
        <p class="current__year">1885</p>
        <button class="next__button button__controller" data-page="${page}">Next</button>
      </div>
    `;
  }

  modalToggle() {
    const answers = document.querySelectorAll('.question__btn');
    const pictures = document.querySelectorAll('.artist__img');
    const answerModal = document.querySelector('.answer__modal');
    const overlay = document.querySelector('.overlay');

    answers?.forEach((item) => {
      new AnswerModal().modalToggleSetListener(item, answerModal, overlay);
    });

    pictures?.forEach((item) => {
      new AnswerModal().modalToggleSetListener(item, answerModal, overlay);
    });
  }

  modalToggleSetListener(btn, modal, overlay) {
    btn.addEventListener('click', () => {
      modal.classList.toggle('answer__modal__active');
      overlay.classList.toggle('overlay__active');
    });
  }
}
