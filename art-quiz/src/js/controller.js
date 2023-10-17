import Main from '../pages/Main';
import Artist from '../pages/Artist';
import Pictures from '../pages/Pictures';
import Settings from '../pages/SettingsPage';
import PictureQuestion from '../pages/PictureQuestion';

const mainContainer = document.querySelector('.main__wrapper');

const classes = {
  Main,
  Artist,
  Pictures,
  Settings,
  PictureQuestion,
};

export default class ControllerPages {
  constructor() {
    this.state = {
      currentPage: 'Main',
      pageBeforeSettings: '',
    };
  }

  init() {
    this.changePage();
    this.setEventListener();
  }

  changePage() {
    const { currentPage, pageBeforeSettings } = this.state;
    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', new classes[currentPage]().render(pageBeforeSettings));
    this.setEventListener();
  }

  setEventListener() {
    const buttons = document.querySelectorAll('.button__controller');
    buttons.forEach((item) => {
      item.addEventListener('click', () => {
        const pageName = item.getAttribute('data-page');
        if (pageName === 'Settings') {
          this.state.pageBeforeSettings = this.state.currentPage;
        }
        this.state.currentPage = pageName;
        this.changePage();
      });
    });
  }
}

new ControllerPages().init();
