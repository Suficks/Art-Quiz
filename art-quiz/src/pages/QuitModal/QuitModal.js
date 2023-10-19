/* eslint-disable class-methods-use-this */
export default class QuitModal {
  render(page) {
    return `
    <div class="quit__game__modal">
          <img class="close modal__close" src="assets/close-logo-black.svg" alt="close">
          <p class="quit__text">Do you really want to quit the game?</p>
          <div class="quit__buttons__wrap">
            <button class="button cancel__btn">Cancel</button>
            <button class="button button__controller" data-page="${page}">Yes</button>
          </div>
    </div>
    `;
  }

  modalToggle() {
    const quitGameBtn = document.querySelector('.picture__close');
    const closeModalBtn = document.querySelector('.modal__close');
    const cancelBtn = document.querySelector('.cancel__btn');

    new QuitModal().modalToggleSetListener(quitGameBtn);
    new QuitModal().modalToggleSetListener(closeModalBtn);
    new QuitModal().modalToggleSetListener(cancelBtn);
  }

  modalToggleSetListener(btn) {
    const quitGameModal = document.querySelector('.quit__game__modal');
    const overlay = document.querySelector('.overlay');

    btn.addEventListener('click', () => {
      quitGameModal.classList.toggle('quit__game__modal__active');
      overlay.classList.toggle('overlay__active');
    });
  }
}
