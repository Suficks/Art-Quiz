import RenderPage from './render';

export default class ControllerPages {
  constructor(page) {
    this.page = page;
  }

  init() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((item) => {
      item.addEventListener('click', () => {
        this.pageName = item.getAttribute('data-page');
        RenderPage.render(this.pageName);
      });
    });
  }
}
