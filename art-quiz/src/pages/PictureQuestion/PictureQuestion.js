/* eslint-disable class-methods-use-this */
export default class PictureQuestion {
  render(_, dataCategory) {
    return `
      <div class="question">
        <img class="close picture__close" src="assets/close-logo.svg" alt="close">
        <p class="main__question">Who is the author of this picture?</p>
        <img class="question__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/full/${dataCategory}full.jpg" alt="question">
        <div class="buttons__wrap">${this.authors()}</div>
        <div class="progress__dots">
          <span class="progress__dot"></span>
          <span class="progress__dot"></span>
          <span class="progress__dot"></span>
          <span class="progress__dot"></span>
          <span class="progress__dot"></span>
          <span class="progress__dot"></span>
          <span class="progress__dot"></span>
          <span class="progress__dot"></span> 
          <span class="progress__dot"></span>
          <span class="progress__dot"></span>
        </div>
      </div>
      `;
  }

  authors() {
    let buttons = '';

    fetch('https://raw.githubusercontent.com/Suficks/image-data/master/images.json')
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < 4; i += 1) {
          const randomAuthor = Math.floor(Math.random() * 240);
          const { author } = data[randomAuthor];
          const button = `<button class="question__btn">${author}</button>`;
          console.log(button);
          buttons += button;
        }
        console.log(buttons);
        return buttons;
      });
  }
}
