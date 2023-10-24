import Main from '../pages/Main';
import Artist from '../pages/Artist';
import Pictures from '../pages/Pictures';
import Settings from '../pages/SettingsPage';
import PictureQuestion from '../pages/PictureQuestion';
import ArtistQuestion from '../pages/ArtistQuestion';
import QuitModal from '../pages/QuitModal';
import EndGameModal from '../pages/EndGameModal';
import Score from '../pages/Score';

const classes = {
  Main,
  Artist,
  Pictures,
  Settings,
  PictureQuestion,
  ArtistQuestion,
  QuitModal,
  EndGameModal,
  Score,
};

export default class ControllerPages {
  constructor() {
    this.state = {
      currentPage: 'Main',
      pageBeforeSettings: '',
      dataCategory: 0,
      pageBeforeScore: '',
    };
  }

  init() {
    this.changePage();
  }

  changePage() {
    const {
      currentPage, pageBeforeSettings, dataCategory, pageBeforeScore,
    } = this.state;

    new classes[currentPage]().render(
      pageBeforeSettings,
      dataCategory,
      this.setEventListener.bind(this),
      pageBeforeScore,
    );
    this.setEventListener();
  }

  setEventListener() {
    const buttons = document.querySelectorAll('.button__controller');

    buttons.forEach((item) => {
      item.addEventListener('click', () => {
        this.state.dataCategory = item.getAttribute('data-category');
        this.state.pageBeforeScore = item.getAttribute('data-prevPage');
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
