import Pictures from '../Pictures';

export default class Artist {
  render() {
    const mainContainer = document.querySelector('.main__wrapper');

    const template = `
      <div class="artist">
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

    document.querySelectorAll('.button__controller').forEach((item) => {
      const attribute = item.getAttribute('data-category');
      new Pictures().completedGames(attribute, item);
    });
  }

  cardFill() {
    const PICNUMBER = 240;
    const PICSTART = 120;
    const PICPERCATEGORIE = 10;

    const categories = ['Portrait', 'Landscape', 'Still Life', 'Graphic', 'Antique', 'Avant-Garde', 'Renaissance', 'Surrealism', 'Kitsch', 'Minimalism', 'Avangard', 'Industrial'];
    let result = '';

    for (let i = PICSTART; i < PICNUMBER; i += 1) {
      if (i % PICPERCATEGORIE === 0) {
        const cardItem = `
        <div class="card__item">
          <div class="card__title__wrap">
            <span class="card__title">${categories[(i - PICSTART) / PICPERCATEGORIE]}</span>
            <p class="score">${new Pictures().getLocalStorageData(i)}</p>
          </div>
          <div class="card__img__wrap">
            <img class="card__img button__controller" src="https://raw.githubusercontent.com/Suficks/image-data/master/img/${i}.jpg" data-page="ArtistQuestion" data-category="${i}" alt="cardPic">
            <button class="score__btn">Score</button>
          </div>
        </div>
        `;
        result += cardItem;
      }
    }

    return result;
  }
}
