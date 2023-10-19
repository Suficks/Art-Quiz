export default class EndGameModal {
  render(page, pageQuestion) {
    return `
      <div class="end__game">
        <img src="" alt="trophy" class="end__img">
        <h2 class="end__game__text"></h2>
        <h2 class="final__result"></h2>
        <div class="buttons__containter">
          <button class="end__btn home__btn button__controller" data-page="${page}"></button>
          <button class="end__btn next__quiz__btn button__controller" data-page="${pageQuestion}"></button>
        </div>
      </div>
    `;
  }

  modalToggle() {
    const endGameModal = document.querySelector('.end__game');
    const overlay = document.querySelector('.overlay');
    endGameModal.classList.toggle('modal__active');
    overlay.classList.toggle('overlay__active');
  }
}
