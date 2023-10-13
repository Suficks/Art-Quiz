const mainContainer = document.querySelector('.main__wrapper');

export default class RenderPage {
  render() {
    const pageTemplate = `
      <div class="${this.pageName}">
        <div class="page__header">
          <button class="button settings" data-page="settings"></button>
          <img src="assets/img/small-logo.svg" alt="logo" class="small__logo">
          <button class="controller__btn">Home</button>
          <button class="controller__btn">Categories</button>
        </div>
        <div class="cards__container"></div>
      </div>
    `;
    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', pageTemplate);
  }
}
