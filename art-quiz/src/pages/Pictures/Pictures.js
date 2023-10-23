export default class Pictures {
  render() {
    const mainContainer = document.querySelector('.main__wrapper');

    const template = `
      <div class="pictures">
        <div class="page__header">
          <button class="settings button__controller" data-page="Settings"></button>
          <img src="assets/small-logo.svg" alt="logo" class="small__logo">
          <button class="button button__controller" data-page="Main">Home</button>
          <button class="button">Categories</button>
        </div>
        <div class="cards__container">${this.cardFill()}</div>
      </div>
    `;

    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', template);

    document.querySelectorAll('.score__btn').forEach((item) => {
      const attribute = item.getAttribute('data-category');
      this.completedGames(attribute, item);
    });
  }

  cardFill() {
    const PICNUMBER = 120;
    const PICPERCATEGORIE = 10;
    const categories = ['Portrait', 'Landscape', 'Still Life', 'Graphic', 'Antique', 'Avant-Garde', 'Renaissance', 'Surrealism', 'Kitsch', 'Minimalism', 'Avangard', 'Industrial'];

    let result = '';

    for (let i = 0; i < PICNUMBER; i += 1) {
      if (i % PICPERCATEGORIE === 0) {
        const cardItem = `
        <div class="card__item">
          <div class="card__title__wrap">
            <span class="card__title">${categories[i / PICPERCATEGORIE]}</span>
            <p class="score">${this.getLocalStorageData(i)}</p>
          </div>
          <div class="card__img__wrap">
            <img class="card__img button__controller" src="https://raw.githubusercontent.com/Suficks/image-data/master/img/${i}.jpg" data-page="PictureQuestion" data-category="${i}" alt="cardPic">
            <button class="score__btn button__controller" data-page="PictureScore" data-category="${i}">Score</button>
          </div>
        </div>
        `;
        result += cardItem;
      }
    }

    return result;
  }

  getLocalStorageData(key) {
    const localStorageData = JSON.parse(localStorage.getItem(key));
    if (localStorageData !== null) {
      return `${localStorageData} / 10`;
    } return '';
  }

  completedGames(key, item) {
    const img = item.previousElementSibling;
    const localStorageData = JSON.parse(localStorage.getItem(key));

    if (localStorageData !== null) {
      item.classList.add('score__active');
      img.classList.add('card__img__color');
    }
  }
}
