export default class AnswerModal {
  render() {
    return `
      <div class="answer__modal">
        <div class="current__img__wrap">
          <img src="assets/incorrect-icon.svg" alt="icon" class="correct__icon"></img>
          <img src="" alt="img" class="current__img">
        </div>
        <p class="current__name"></p>
        <p class="current__author"></p>
        <p class="current__year"></p>
        <button class="next__button">Next</button>
      </div>
    `;
  }

  // modalToggle() {
  //   const pictures = document.querySelectorAll('.artist__img');

  //   pictures?.forEach((item) => {
  //     new AnswerModal().modalToggleSetListener(item);
  //   });
  // }

  modalToggle(btn) {
    const answerModal = document.querySelector('.answer__modal');
    const overlay = document.querySelector('.overlay');

    btn.addEventListener('click', () => {
      answerModal.classList.toggle('modal__active');
      overlay.classList.toggle('overlay__active');
    });
  }
}
