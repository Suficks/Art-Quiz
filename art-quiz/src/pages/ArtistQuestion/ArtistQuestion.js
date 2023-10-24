import QuitModal from '../QuitModal';
import AnswerModal from '../AnswerModal';
import EndGameModal from '../EndGameModal';
import { audioFiles } from '../PictureQuestion';

const QUESTION_LENGTH = 10;

export default class ArtistQuestion {
  constructor() {
    this.state = {
      dataCategory: 0,
      authorNum: 0,
      data: [],
      correctAnswerCount: 0,
      answerForEachPic: [],
    };
  }

  async render(_, dataCategory, setEventListener) {
    this.state.dataCategory = +dataCategory;
    this.state.authorNum = +dataCategory || this.state.authorNum;

    await this.dataFetch();

    const mainContainer = document.querySelector('.main__wrapper');

    const template = `
      <div class="question">
        <img class="close picture__close" src="assets/close-logo.svg" alt="close">
        <div class="progress__wrap">
          <progress class="progress__bar" value="0" max="100"></progress>
          <span class="timer">0:00</span>
        </div>
        <p class="main__question">Which is ${this.state.data[dataCategory].author} picture?</p>
        <div class="img__container"></div>
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
        ${new QuitModal().render('Artist')}
        ${new EndGameModal().render('Artist', 'ArtistQuestion')}
        <div class="overlay"></div>
      </div>
      `;

    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', template);
    this.getPictures();
    setEventListener();
    this.answerCheck();
    this.nextQuestion();
    new QuitModal().modalToggle();
    this.setTimeGame();
  }

  async dataFetch() {
    const url = 'https://raw.githubusercontent.com/Suficks/image-data/master/images.json';
    const res = await fetch(url);
    this.state.data = await res.json();
  }

  getPictures() {
    const { authorNum } = this.state;
    const imgContainer = document.querySelector('.img__container');

    const pictures = new Set();

    const correctImg = `<img class="artist__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/img/${authorNum}.jpg" alt="question">`;

    while (pictures.size < 4) {
      pictures.add(correctImg);
      const randomNum = Math.floor(Math.random() * 240);
      const img = `<img class="artist__img" src="https://raw.githubusercontent.com/Suficks/image-data/master/img/${randomNum}.jpg" alt="question">`;
      pictures.add(img);
    }

    const shuffleImgs = this.shuffle([...pictures]);
    imgContainer.innerHTML = '';

    shuffleImgs.forEach((item) => {
      imgContainer.insertAdjacentHTML('beforeend', item);
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
    const { authorNum, data } = this.state;
    const {
      author, name, year, imageNum,
    } = data[authorNum];

    const answers = document.querySelectorAll('.artist__img');
    const correctAuthor = document.querySelector('.current__author');
    const correctName = document.querySelector('.current__name');
    const correctYear = document.querySelector('.current__year');
    const currentPic = document.querySelector('.current__img');
    const progressDots = [...document.querySelectorAll('.progress__dot')];
    const correctIcon = document.querySelector('.correct__icon');

    const dotsCount = authorNum % 10;
    const regex = /\/(\d+)\.jpg/;

    answers.forEach((item) => {
      item.addEventListener('click', () => {
        if (item.src.match(regex)[1] === imageNum) {
          correctIcon.src = 'assets/correct-icon.svg';
          progressDots[dotsCount].style.backgroundColor = '#47A76A';
          this.state.correctAnswerCount += 1;
          this.state.answerForEachPic.push(true);
          audioFiles[0].play();
        } else {
          correctIcon.src = 'assets/incorrect-icon.svg';
          progressDots[dotsCount].style.backgroundColor = '#FFBCA2';
          this.state.answerForEachPic.push(false);
          audioFiles[1].play();
        }
        currentPic.src = `https://raw.githubusercontent.com/Suficks/image-data/master/img/${authorNum}.jpg`;
        correctAuthor.innerHTML = author;
        correctName.innerHTML = name;
        correctYear.innerHTML = year;
        new AnswerModal().modalToggle();
      });
    });
  }

  nextQuestion() {
    const nextBtn = document.querySelector('.next__button');

    nextBtn.addEventListener('click', () => {
      const { authorNum, dataCategory, data } = this.state;

      if (authorNum === dataCategory + QUESTION_LENGTH - 1) {
        this.endGame();
        return;
      }

      const nextAuthor = document.querySelector('.main__question');
      this.state.authorNum += 1;
      nextAuthor.innerHTML = `Which is ${data[this.state.authorNum].author} picture?`;
      this.getPictures();
      this.answerCheck();
      new AnswerModal().modalToggle();
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
      audioFiles[4].play();
    } else if (correctAnswerCount === 10) {
      endImg.src = 'assets/stars.svg';
      endImg.style.width = '240px';
      finalText.innerHTML = 'Grand result';
      result.innerHTML = 'Congratulations!';
      homeBtn.innerHTML = 'Home';
      nexeQuizBtn.innerHTML = 'Next Quiz';
      nexeQuizBtn.setAttribute('data-category', dataCategory + QUESTION_LENGTH);
      audioFiles[3].play();
      this.setLocalStorageData();
    } else {
      endImg.src = 'assets/trophy.svg';
      finalText.innerHTML = 'Congratulations!';
      result.innerHTML = `${correctAnswerCount} / 10`;
      homeBtn.innerHTML = 'Home';
      nexeQuizBtn.innerHTML = 'Next Quiz';
      nexeQuizBtn.setAttribute('data-category', dataCategory + QUESTION_LENGTH);
      audioFiles[2].play();
      this.setLocalStorageData();
    }
    new EndGameModal().modalToggle();
  }

  setLocalStorageData() {
    const { correctAnswerCount, dataCategory, answerForEachPic } = this.state;
    localStorage.setItem(dataCategory, JSON.stringify(correctAnswerCount));
    localStorage.setItem(`${dataCategory}-result`, JSON.stringify(answerForEachPic));
  }

  getLocalStorageData() {
    return JSON.parse(localStorage.getItem('settings'));
  }

  setTimeGame() {
    const progressBar = document.querySelector('.progress__bar');
    const progressWrap = document.querySelector('.progress__wrap');
    const progressTime = document.querySelector('.timer');
    const newTime = this.getLocalStorageData().timeToAnswer * 10;

    let minutes = 0;
    let seconds = 0;
    let commonTime = 0;
    let start = 0;

    if (this.getLocalStorageData().isTimeGame) {
      progressWrap.classList.add('progress__active');

      const intervalId = setInterval(() => {
        if (start > 100) clearInterval(intervalId);
        else progressBar.value = start;
        start += 1;
      }, newTime);

      const timer = setInterval(() => {
        if (seconds > 9) progressTime.innerHTML = `${minutes}:${seconds}`;
        else progressTime.innerHTML = `${minutes}:0${seconds}`;
        seconds += 1;
        commonTime += 1;
        if (seconds > 59) {
          minutes += 1;
          seconds = 0;
        }
        if (commonTime > this.getLocalStorageData().timeToAnswer) {
          clearInterval(timer);
          new AnswerModal().modalClose();
          this.endGame();
        }
      }, 1000);
    }
  }
}
