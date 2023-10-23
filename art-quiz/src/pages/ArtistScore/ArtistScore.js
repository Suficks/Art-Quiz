import PictureScore from '../PictureScore';

export default class ArtistScore {
  render(_, dataCategory) {
    const mainContainer = document.querySelector('.main__wrapper');

    const template = `
      <div class="score__page">
        <div class="page__header">
          <button class="settings button__controller" data-page="Settings"></button>
          <img src="assets/small-logo.svg" alt="logo" class="small__logo">
          <button class="button button__controller" data-page="Main">Home</button>
          <button class="button button__controller" data-page="Artist">Categories</button>
          <button class="score">Score</button>
        </div>
        <div class="cards__container">${new PictureScore().cardFill(+dataCategory)}</div>
      </div>
    `;

    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', template);
    this.setCorrectImg(dataCategory);
  }

  setCorrectImg(key) {
    const array = new PictureScore().getLocalStorageData(`${key}-result`);
    const imgs = document.querySelectorAll('.card__img');

    imgs.forEach((item, index) => {
      if (array[index] === true) {
        item.classList.add('img__correct');
      } else item.classList.add('img__incorrect');
    });
  }
}
