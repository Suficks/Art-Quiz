export default class Score {
  render(_, dataCategory) {
    const mainContainer = document.querySelector('.main__wrapper');

    const template = `
      <div class="score__page">
        <div class="page__header">
          <button class="settings button__controller" data-page="Settings"></button>
          <img src="assets/small-logo.svg" alt="logo" class="small__logo">
          <button class="button button__controller" data-page="Main">Home</button>
          <button class="button button__controller" data-page="Pictures">Categories</button>
          <button class="score">Score</button>
        </div>
        <div class="cards__container">${this.cardFill(+dataCategory)}</div>
      </div>
    `;

    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', template);
  }

  cardFill(dataCategory) {
    const PICPERCATEGORIE = 10;

    let result = '';

    for (let i = dataCategory; i < dataCategory + PICPERCATEGORIE; i += 1) {
      const cardItem = `
        <div class="card__item">
          <img class="card__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/img/${i}.jpg" alt="cardPic">
        </div>
      `;
      result += cardItem;
    }

    return result;
  }
}
