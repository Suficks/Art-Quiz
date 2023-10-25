export default class Score {
  constructor() {
    this.state = {
      data: [],
      pageBeforeScore: '',
    };
  }

  async render(_, dataCategory, setEventListener, pageBeforeScore) {
    this.state.pageBeforeScore = pageBeforeScore;

    await this.dataFetch();

    const mainContainer = document.querySelector('.main__wrapper');
    const preloader = document.querySelector('.preloader');

    const template = `
      <div class="score__page">
        <div class="page__header">
          <button class="settings button__controller" data-page="Settings"></button>
          <img src="assets/small-logo.svg" alt="logo" class="small__logo">
          <button class="button button__controller" data-page="Main">Home</button>
          <button class="button button__controller" data-page="${pageBeforeScore}">Categories</button>
          <button class="score">Score</button>
        </div>
        <div class="cards__container">${this.cardFill(+dataCategory)}</div>
      </div>
    `;

    preloader.classList.add('show__preloader');
    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', template);
    setTimeout(() => {
      preloader.classList.remove('show__preloader');
    }, 1000);

    setEventListener();
    this.setCorrectImg(dataCategory);
  }

  async dataFetch() {
    const url = 'https://raw.githubusercontent.com/Suficks/image-data/master/images.json';
    const res = await fetch(url);
    this.state.data = await res.json();
  }

  cardFill(dataCategory) {
    const PICPERCATEGORIE = 10;

    let result = '';

    for (let i = dataCategory; i < dataCategory + PICPERCATEGORIE; i += 1) {
      const cardItem = `
        <div class="card__item">
          <img class="card__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/img/${i}.jpg" alt="cardPic">
          <div class="answer">
            <p class="current__name">${this.state.data[i].name}</p>
            <p class="current__author__year">${this.state.data[i].author}, ${this.state.data[i].year}</p>
          </div>
        </div>
      `;
      result += cardItem;
    }

    return result;
  }

  setCorrectImg(key) {
    const array = this.getLocalStorageData(`${key}-result`);
    const imgs = document.querySelectorAll('.card__img');

    imgs.forEach((item, index) => {
      const answerActive = () => item.nextElementSibling.classList.toggle('answer__active');

      if (array[index] === true) {
        item.classList.add('img__correct');
        item.addEventListener('mouseenter', answerActive);
        item.addEventListener('mouseleave', answerActive);
      } else if (this.state.pageBeforeScore === 'Artist') {
        item.classList.add('img__incorrect');
      }
    });
  }

  getLocalStorageData(key) {
    const localStorageData = JSON.parse(localStorage.getItem(key));
    return localStorageData;
  }
}
