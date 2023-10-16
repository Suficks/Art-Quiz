import Main from '../pages/Main';
import Artist from '../pages/Artist';
import Pictures from '../pages/Pictures';
// import Settings from '../pages/Artist';

const mainContainer = document.querySelector('.main__wrapper');

const classes = {
  Main,
  Artist,
  Pictures,
  // Settings,
};

export default class ControllerPages {
  constructor() {
    this.state = {
      CurrentPage: Main,
    };
  }

  init() {
    this.changePage();
    this.setEventListener();
  }

  changePage() {
    const { CurrentPage } = this.state;
    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', new CurrentPage().render());
    if (CurrentPage !== Main) {
      new CurrentPage().cardFill();
    }
    this.setEventListener();
  }

  setEventListener() {
    const buttons = document.querySelectorAll('.button__controller');
    buttons.forEach((item) => {
      item.addEventListener('click', () => {
        const pageName = item.getAttribute('data-page');
        this.state.CurrentPage = classes[pageName];
        this.changePage();
      });
    });
  }
}

new ControllerPages().init();
