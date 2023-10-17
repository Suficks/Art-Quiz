/* eslint-disable class-methods-use-this */
export default class Pictures {
  render() {
    return `
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
            <p class="score"></p>
          </div>
          <div class="card__img__wrap">
            <img class="card__img button__controller" src="https://raw.githubusercontent.com/Suficks/image-data/master/img/${i}.jpg" data-page="PictureQuestion" alt="cardPic">
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
