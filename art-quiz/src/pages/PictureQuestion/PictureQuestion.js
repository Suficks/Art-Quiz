import QuitModal from '../QuitModal';
import AnswerModal from '../AnswerModal';
import EndGameModal from '../EndGameModal';

const QUESTION_LENGTH = 10;

export default class PictureQuestion {
  constructor() {
    this.state = {
      dataCategory: 0,
      pictureNum: 0,
      data: [],
      correctAnswerCount: 0,
    };
  }

  async render(_, dataCategory, setEventListener) {
    this.state.dataCategory = +dataCategory;
    this.state.pictureNum = +dataCategory || this.state.pictureNum;

    await this.dataFetch();

    const mainContainer = document.querySelector('.main__wrapper');

    const template = `
      <div class="question">
        <img class="close picture__close" src="assets/close-logo.svg" alt="close">
        <p class="main__question">Who is the author of this picture?</p>
        <img class="question__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/img/${this.state.pictureNum}.jpg" alt="question">
        <div class="buttons__wrap"></div>
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
        ${new AnswerModal().render()}
        ${new QuitModal().render('Pictures')}
        ${new EndGameModal().render('Pictures', 'PictureQuestion')}
        <div class="overlay"></div>
      </div >
    `;

    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', template);
    this.getAuthors();
    new QuitModal().modalToggle();
    setEventListener();
    this.answerCheck();
    this.nextQuestion();
  }

  async dataFetch() {
    const url = 'https://raw.githubusercontent.com/Suficks/image-data/master/images.json';
    const res = await fetch(url);
    this.state.data = await res.json();
  }

  getAuthors() {
    const { pictureNum, data } = this.state;
    const buttonContainer = document.querySelector('.buttons__wrap');

    const buttons = new Set();

    const correctAnswer = data[pictureNum].author;
    const correctButton = `<button class="question__btn">${correctAnswer}</button>`;

    while (buttons.size < 4) {
      buttons.add(correctButton);
      const randomAuthor = Math.floor(Math.random() * 240);
      const { author } = data[randomAuthor];
      const button = `<button class="question__btn">${author}</button>`;
      buttons.add(button);
    }

    const shuffleButtons = this.shuffle([...buttons]);
    buttonContainer.innerHTML = '';

    shuffleButtons.forEach((item) => {
      buttonContainer.insertAdjacentHTML('beforeend', item);
    });
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  answerCheck() {
    const { pictureNum, data } = this.state;
    const { author, name, year } = data[pictureNum];

    const answers = document.querySelectorAll('.question__btn');
    const correctAuthor = document.querySelector('.current__author');
    const correctName = document.querySelector('.current__name');
    const correctYear = document.querySelector('.current__year');
    const currentPic = document.querySelector('.current__img');
    const questionPic = document.querySelector('.question__img');
    const progressDots = [...document.querySelectorAll('.progress__dot')];
    const correctIcon = document.querySelector('.correct__icon');

    const dotsCount = pictureNum % 10;

    answers.forEach((item) => {
      item.addEventListener('click', () => {
        if (item.textContent === author) {
          correctIcon.src = 'assets/correct-icon.svg';
          progressDots[dotsCount].style.backgroundColor = '#47A76A';
          this.state.correctAnswerCount += 1;
        } else {
          correctIcon.src = 'assets/incorrect-icon.svg';
          progressDots[dotsCount].style.backgroundColor = '#FFBCA2';
        }
        currentPic.src = questionPic.src;
        correctAuthor.innerHTML = author;
        correctName.innerHTML = name;
        correctYear.innerHTML = year;
      });
      new AnswerModal().modalToggle(item);
    });
  }

  endGame() {
    const { correctAnswerCount, dataCategory } = this.state;
    const endImg = document.querySelector('.end__img');
    const finalText = document.querySelector('.end__game__text');
    const result = document.querySelector('.final__result');
    const homeBtn = document.querySelector('.home__btn');
    const nexeQuizBtn = document.querySelector('.next__quiz__btn');

    if (correctAnswerCount < 5) {
      endImg.src = 'assets/lose-trophy.svg';
      finalText.innerHTML = 'Game over';
      result.innerHTML = 'Play again?';
      homeBtn.innerHTML = 'No';
      nexeQuizBtn.innerHTML = 'Yes';
      nexeQuizBtn.setAttribute('data-category', dataCategory);
    } else if (correctAnswerCount === 10) {
      endImg.src = 'assets/stars.svg';
      endImg.style.width = '240px';
      finalText.innerHTML = 'Grand result';
      result.innerHTML = 'Congratulations!';
      homeBtn.innerHTML = 'Home';
      nexeQuizBtn.innerHTML = 'Next Quiz';
      nexeQuizBtn.setAttribute('data-category', dataCategory + QUESTION_LENGTH);
    } else {
      endImg.src = 'assets/trophy.svg';
      finalText.innerHTML = 'Congratulations!';
      result.innerHTML = `${correctAnswerCount} / 10`;
      homeBtn.innerHTML = 'Home';
      nexeQuizBtn.innerHTML = 'Next Quiz';
    }
    new EndGameModal().modalToggle();
  }

  nextQuestion() {
    const nextBtn = document.querySelector('.next__button');

    nextBtn.addEventListener('click', () => {
      const { pictureNum, dataCategory } = this.state;

      if (pictureNum === dataCategory + QUESTION_LENGTH - 1) {
        this.endGame();
        return;
      }

      const questionPic = document.querySelector('.question__img');
      this.state.pictureNum += 1;
      questionPic.src = `https://raw.githubusercontent.com/Suficks/image-data/master/img/${this.state.pictureNum}.jpg`;
      this.getAuthors();
      this.answerCheck();
    });
    new AnswerModal().modalToggle(nextBtn);
  }
}
