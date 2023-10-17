import Main from '../pages/Main';
import Artist from '../pages/Artist';
import Pictures from '../pages/Pictures';
import Settings from '../pages/SettingsPage';
import PictureQuestion from '../pages/PictureQuestion';
import ArtistQuestion from '../pages/ArtistQuestion';

const mainContainer = document.querySelector('.main__wrapper');

const classes = {
  Main,
  Artist,
  Pictures,
  Settings,
  PictureQuestion,
  ArtistQuestion,
};

export default class ControllerPages {
  constructor() {
    this.state = {
      currentPage: 'Main',
      pageBeforeSettings: '',
      dataCategory: 0,
    };
  }

  init() {
    this.changePage();
    this.setEventListener();
  }

  changePage() {
    const { currentPage, pageBeforeSettings, dataCategory } = this.state;
    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', new classes[currentPage]().render(pageBeforeSettings, dataCategory));
    this.setEventListener();
  }

  setEventListener() {
    const buttons = document.querySelectorAll('.button__controller');
    buttons.forEach((item) => {
      item.addEventListener('click', () => {
        this.state.dataCategory = item.getAttribute('data-category');
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
