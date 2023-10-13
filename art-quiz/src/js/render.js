const mainContainer = document.querySelector('.main__wrapper');

export default class RenderPage {
  render(pageName) {
    const pageTemplate = `
      <div class="${pageName}">
        <div class="page__header">
          <button class="button settings" data-page="settings"></button>
          <img src="assets/small-logo.svg" alt="logo" class="small__logo">
          <button class="controller__btn">Home</button>
          <button class="controller__btn">Categories</button>
        </div>
        <div class="cards__container"></div>
      </div>
    `;
    mainContainer.classList.add('main__wrapper__move');
    setTimeout(() => {
      mainContainer.innerHTML = '';
      mainContainer.insertAdjacentHTML('beforeend', pageTemplate);
      mainContainer.classList.add('main__wrapper__remove');
    }, 700);
  }
}
