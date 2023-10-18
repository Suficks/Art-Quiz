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
    const quitGameModal = document.querySelector('.quit__game__modal');
    const overlay = document.querySelector('.overlay');
    const quitGameBtn = document.querySelector('.picture__close');
    const closeModalBtn = document.querySelector('.modal__close');
    const cancelBtn = document.querySelector('.cancel__btn');

    new QuitModal().modalToggleSetListener(quitGameBtn, quitGameModal, overlay);
    new QuitModal().modalToggleSetListener(closeModalBtn, quitGameModal, overlay);
    new QuitModal().modalToggleSetListener(cancelBtn, quitGameModal, overlay);
  }

  modalToggleSetListener(btn, modal, overlay) {
    btn.addEventListener('click', () => {
      modal.classList.toggle('quit__game__modal__active');
      overlay.classList.toggle('overlay__active');
    });
  }
}
