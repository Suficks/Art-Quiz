/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _js_Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Controller */ \"./src/js/Controller.js\");\n/* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Main */ \"./src/pages/Main/index.js\");\n/* harmony import */ var _pages_Artist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Artist */ \"./src/pages/Artist/index.js\");\n/* harmony import */ var _pages_Pictures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Pictures */ \"./src/pages/Pictures/index.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://art-quiz/./src/index.js?");

/***/ }),

/***/ "./src/js/Controller.js":
/*!******************************!*\
  !*** ./src/js/Controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ControllerPages)\n/* harmony export */ });\n/* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Main */ \"./src/pages/Main/index.js\");\n/* harmony import */ var _pages_Artist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Artist */ \"./src/pages/Artist/index.js\");\n/* harmony import */ var _pages_Pictures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Pictures */ \"./src/pages/Pictures/index.js\");\n/* harmony import */ var _pages_SettingsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/SettingsPage */ \"./src/pages/SettingsPage/index.js\");\n/* harmony import */ var _pages_PictureQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/PictureQuestion */ \"./src/pages/PictureQuestion/index.js\");\n/* harmony import */ var _pages_ArtistQuestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/ArtistQuestion */ \"./src/pages/ArtistQuestion/index.js\");\n/* harmony import */ var _pages_QuitModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/QuitModal */ \"./src/pages/QuitModal/index.js\");\n/* harmony import */ var _pages_EndGameModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/EndGameModal */ \"./src/pages/EndGameModal/index.js\");\n/* harmony import */ var _pages_Score__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/Score */ \"./src/pages/Score/index.js\");\n\n\n\n\n\n\n\n\n\nconst classes = {\n  Main: _pages_Main__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Artist: _pages_Artist__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  Pictures: _pages_Pictures__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  Settings: _pages_SettingsPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  PictureQuestion: _pages_PictureQuestion__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  ArtistQuestion: _pages_ArtistQuestion__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  QuitModal: _pages_QuitModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  EndGameModal: _pages_EndGameModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  Score: _pages_Score__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n};\nclass ControllerPages {\n  constructor() {\n    this.state = {\n      currentPage: 'Main',\n      pageBeforeSettings: '',\n      dataCategory: 0,\n      pageBeforeScore: ''\n    };\n  }\n  init() {\n    this.changePage();\n  }\n  changePage() {\n    const {\n      currentPage,\n      pageBeforeSettings,\n      dataCategory,\n      pageBeforeScore\n    } = this.state;\n    new classes[currentPage]().render(pageBeforeSettings, dataCategory, this.setEventListener.bind(this), pageBeforeScore);\n    this.setEventListener();\n  }\n  setEventListener() {\n    const buttons = document.querySelectorAll('.button__controller');\n    buttons.forEach(item => {\n      item.addEventListener('click', () => {\n        this.state.dataCategory = item.getAttribute('data-category');\n        this.state.pageBeforeScore = item.getAttribute('data-prevPage');\n        const pageName = item.getAttribute('data-page');\n        if (pageName === 'Settings') {\n          this.state.pageBeforeSettings = this.state.currentPage;\n        }\n        this.state.currentPage = pageName;\n        this.changePage();\n      });\n    });\n  }\n}\nnew ControllerPages().init();\n\n//# sourceURL=webpack://art-quiz/./src/js/Controller.js?");

/***/ }),

/***/ "./src/pages/AnswerModal/AnswerModal.js":
/*!**********************************************!*\
  !*** ./src/pages/AnswerModal/AnswerModal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnswerModal)\n/* harmony export */ });\nclass AnswerModal {\n  render() {\n    return `\n      <div class=\"answer__modal\">\n        <div class=\"current__img__wrap\">\n          <img src=\"assets/incorrect-icon.svg\" alt=\"icon\" class=\"correct__icon\"></img>\n          <img src=\"\" alt=\"img\" class=\"current__img\">\n        </div>\n        <p class=\"current__name\"></p>\n        <p class=\"current__author\"></p>\n        <p class=\"current__year\"></p>\n        <button class=\"next__button\">Next</button>\n      </div>\n    `;\n  }\n  modalToggle() {\n    const answerModal = document.querySelector('.answer__modal');\n    const overlay = document.querySelector('.overlay');\n    answerModal.classList.toggle('modal__active');\n    overlay.classList.toggle('overlay__active');\n  }\n  modalClose() {\n    const answerModal = document.querySelector('.answer__modal');\n    const overlay = document.querySelector('.overlay');\n    answerModal?.classList.remove('modal__active');\n    overlay?.classList.remove('overlay__active');\n  }\n}\n\n//# sourceURL=webpack://art-quiz/./src/pages/AnswerModal/AnswerModal.js?");

/***/ }),

/***/ "./src/pages/AnswerModal/index.js":
/*!****************************************!*\
  !*** ./src/pages/AnswerModal/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AnswerModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnswerModal */ \"./src/pages/AnswerModal/AnswerModal.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AnswerModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://art-quiz/./src/pages/AnswerModal/index.js?");

/***/ }),

/***/ "./src/pages/ArtistQuestion/ArtistQuestion.js":
/*!****************************************************!*\
  !*** ./src/pages/ArtistQuestion/ArtistQuestion.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ArtistQuestion)\n/* harmony export */ });\n/* harmony import */ var _QuitModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../QuitModal */ \"./src/pages/QuitModal/index.js\");\n/* harmony import */ var _AnswerModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AnswerModal */ \"./src/pages/AnswerModal/index.js\");\n/* harmony import */ var _EndGameModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EndGameModal */ \"./src/pages/EndGameModal/index.js\");\n/* harmony import */ var _PictureQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PictureQuestion */ \"./src/pages/PictureQuestion/index.js\");\n/* eslint-disable no-unsafe-optional-chaining */\n\n\n\n\nconst QUESTION_LENGTH = 10;\nclass ArtistQuestion {\n  constructor() {\n    this.state = {\n      dataCategory: 0,\n      authorNum: 0,\n      data: [],\n      correctAnswerCount: 0,\n      answerForEachPic: []\n    };\n  }\n  async render(_, dataCategory, setEventListener) {\n    this.state.dataCategory = +dataCategory;\n    this.state.authorNum = +dataCategory || this.state.authorNum;\n    await this.dataFetch();\n    const mainContainer = document.querySelector('.main__wrapper');\n    const template = `\n      <div class=\"question\">\n        <img class=\"close picture__close\" src=\"assets/close-logo.svg\" alt=\"close\">\n        <div class=\"progress__wrap\">\n          <progress class=\"progress__bar\" value=\"0\" max=\"100\"></progress>\n          <span class=\"timer\">0:${this.getLocalStorageData()?.timeToAnswer}</span>\n        </div>\n        <p class=\"main__question\">Which is ${this.state.data[dataCategory].author} picture?</p>\n        <div class=\"img__container\"></div>\n        <div class=\"progress__dots\">\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span> \n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n        </div>\n        ${new _AnswerModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().render()}\n        ${new _QuitModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().render('Artist')}\n        ${new _EndGameModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().render('Artist', 'ArtistQuestion')}\n        <div class=\"overlay\"></div>\n      </div>\n    `;\n    mainContainer.innerHTML = '';\n    mainContainer.insertAdjacentHTML('beforeend', template);\n    this.getPictures();\n    setEventListener();\n    this.answerCheck();\n    this.nextQuestion();\n    this.setTimeGame();\n    _PictureQuestion__WEBPACK_IMPORTED_MODULE_3__.audioFiles.forEach(audio => {\n      audio.volume = +this.getLocalStorageData('settings')?.volume / 100 || 0.5;\n    });\n    new _QuitModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().modalToggle();\n  }\n  async dataFetch() {\n    const url = 'https://raw.githubusercontent.com/Suficks/image-data/master/images.json';\n    const res = await fetch(url);\n    this.state.data = await res.json();\n  }\n  getPictures() {\n    const {\n      authorNum\n    } = this.state;\n    const imgContainer = document.querySelector('.img__container');\n    const pictures = new Set();\n    const correctImg = `<img class=\"artist__img\" src=\"https://raw.githubusercontent.com/Suficks/image-data/master/img/${authorNum}.jpg\" alt=\"question\">`;\n    while (pictures.size < 4) {\n      pictures.add(correctImg);\n      const randomNum = Math.floor(Math.random() * 240);\n      const img = `<img class=\"artist__img\" src=\"https://raw.githubusercontent.com/Suficks/image-data/master/img/${randomNum}.jpg\" alt=\"question\">`;\n      pictures.add(img);\n    }\n    const shuffleImgs = this.shuffle([...pictures]);\n    imgContainer.innerHTML = '';\n    shuffleImgs.forEach(item => {\n      imgContainer.insertAdjacentHTML('beforeend', item);\n    });\n  }\n  shuffle(array) {\n    for (let i = array.length - 1; i > 0; i -= 1) {\n      const j = Math.floor(Math.random() * (i + 1));\n      [array[i], array[j]] = [array[j], array[i]];\n    }\n    return array;\n  }\n  answerCheck(seconds) {\n    const {\n      authorNum,\n      data\n    } = this.state;\n    const {\n      author,\n      name,\n      year,\n      imageNum\n    } = data[authorNum];\n    const answers = document.querySelectorAll('.artist__img');\n    const correctAuthor = document.querySelector('.current__author');\n    const correctName = document.querySelector('.current__name');\n    const correctYear = document.querySelector('.current__year');\n    const currentPic = document.querySelector('.current__img');\n    const progressDots = [...document.querySelectorAll('.progress__dot')];\n    const correctIcon = document.querySelector('.correct__icon');\n    const dotsCount = authorNum % 10;\n    const regex = /\\/(\\d+)\\.jpg/;\n    answers.forEach(item => {\n      item.addEventListener('click', () => {\n        if (item.src.match(regex)[1] === imageNum) {\n          correctIcon.src = 'assets/correct-icon.svg';\n          progressDots[dotsCount].style.backgroundColor = '#47A76A';\n          this.state.correctAnswerCount += 1;\n          this.state.answerForEachPic.push(true);\n          _PictureQuestion__WEBPACK_IMPORTED_MODULE_3__.audioFiles[0].play();\n        } else {\n          correctIcon.src = 'assets/incorrect-icon.svg';\n          progressDots[dotsCount].style.backgroundColor = '#FFBCA2';\n          this.state.answerForEachPic.push(false);\n          _PictureQuestion__WEBPACK_IMPORTED_MODULE_3__.audioFiles[1].play();\n        }\n        currentPic.src = `https://raw.githubusercontent.com/Suficks/image-data/master/img/${authorNum}.jpg`;\n        correctAuthor.innerHTML = author;\n        correctName.innerHTML = name;\n        correctYear.innerHTML = year;\n        new _AnswerModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().modalToggle();\n      });\n    });\n    if (seconds === 0) {\n      correctIcon.src = 'assets/correct-icon.svg';\n      progressDots[dotsCount].style.backgroundColor = '#FFBCA2';\n      this.state.answerForEachPic.push(false);\n      _PictureQuestion__WEBPACK_IMPORTED_MODULE_3__.audioFiles[1].play();\n      currentPic.src = `https://raw.githubusercontent.com/Suficks/image-data/master/img/${authorNum}.jpg`;\n      correctAuthor.innerHTML = author;\n      correctName.innerHTML = name;\n      correctYear.innerHTML = year;\n      new _AnswerModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().modalToggle();\n    }\n  }\n  nextQuestion() {\n    const nextBtn = document.querySelector('.next__button');\n    nextBtn.addEventListener('click', () => {\n      const {\n        authorNum,\n        dataCategory,\n        data\n      } = this.state;\n      if (authorNum === dataCategory + QUESTION_LENGTH - 1) {\n        new _AnswerModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().modalClose();\n        this.endGame();\n        return;\n      }\n      const nextAuthor = document.querySelector('.main__question');\n      this.state.authorNum += 1;\n      nextAuthor.innerHTML = `Which is ${data[this.state.authorNum].author} picture?`;\n      this.getPictures();\n      this.answerCheck();\n      new _AnswerModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().modalToggle();\n      this.setTimeGame();\n    });\n  }\n  endGame() {\n    const {\n      correctAnswerCount,\n      dataCategory\n    } = this.state;\n    const endImg = document.querySelector('.end__img');\n    const finalText = document.querySelector('.end__game__text');\n    const result = document.querySelector('.final__result');\n    const homeBtn = document.querySelector('.home__btn');\n    const nexeQuizBtn = document.querySelector('.next__quiz__btn');\n    if (correctAnswerCount < 5) {\n      endImg.src = 'assets/lose-trophy.svg';\n      finalText.innerHTML = 'Game over';\n      result.innerHTML = 'Play again?';\n      homeBtn.innerHTML = 'No';\n      nexeQuizBtn.innerHTML = 'Yes';\n      nexeQuizBtn.setAttribute('data-category', dataCategory);\n      _PictureQuestion__WEBPACK_IMPORTED_MODULE_3__.audioFiles[4].play();\n    } else if (correctAnswerCount === 10) {\n      endImg.src = 'assets/stars.svg';\n      endImg.style.width = '240px';\n      finalText.innerHTML = 'Grand result';\n      result.innerHTML = 'Congratulations!';\n      homeBtn.innerHTML = 'Home';\n      nexeQuizBtn.innerHTML = 'Next Quiz';\n      nexeQuizBtn.setAttribute('data-category', dataCategory + QUESTION_LENGTH);\n      _PictureQuestion__WEBPACK_IMPORTED_MODULE_3__.audioFiles[3].play();\n      this.setLocalStorageData();\n    } else {\n      endImg.src = 'assets/trophy.svg';\n      finalText.innerHTML = 'Congratulations!';\n      result.innerHTML = `${correctAnswerCount} / 10`;\n      homeBtn.innerHTML = 'Home';\n      nexeQuizBtn.innerHTML = 'Next Quiz';\n      nexeQuizBtn.setAttribute('data-category', dataCategory + QUESTION_LENGTH);\n      _PictureQuestion__WEBPACK_IMPORTED_MODULE_3__.audioFiles[2].play();\n      this.setLocalStorageData();\n    }\n    new _EndGameModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().modalOpen();\n  }\n  setLocalStorageData() {\n    const {\n      correctAnswerCount,\n      dataCategory,\n      answerForEachPic\n    } = this.state;\n    localStorage.setItem(dataCategory, JSON.stringify(correctAnswerCount));\n    localStorage.setItem(`${dataCategory}-result`, JSON.stringify(answerForEachPic));\n  }\n  getLocalStorageData() {\n    return JSON.parse(localStorage.getItem('settings'));\n  }\n  setTimeGame() {\n    const progressBar = document.querySelector('.progress__bar');\n    const progressWrap = document.querySelector('.progress__wrap');\n    const progressTime = document.querySelector('.timer');\n    const answerModal = document.querySelector('.answer__modal');\n    const quitModal = document.querySelector('.quit__game__modal');\n    const newTime = this.getLocalStorageData()?.timeToAnswer * 10;\n    let seconds = +this.getLocalStorageData()?.timeToAnswer;\n    let start = 0;\n    let isPaused = false;\n    if (this.getLocalStorageData()?.isTimeGame) {\n      progressWrap.classList.add('progress__active');\n      const intervalId = setInterval(() => {\n        if (!isPaused) {\n          if (start > 100 || answerModal.classList.contains('modal__active')) clearInterval(intervalId);else progressBar.value = start;\n          start += 1;\n        }\n      }, newTime);\n      const timer = setInterval(() => {\n        if (!isPaused) {\n          if (seconds > 9) progressTime.innerHTML = `0:${seconds}`;else progressTime.innerHTML = `0:0${seconds}`;\n          seconds -= 1;\n          if (answerModal.classList.contains('modal__active')) clearInterval(timer);\n          if (seconds === 0) this.answerCheck(seconds);\n        }\n        if (quitModal.classList.contains('modal__active')) isPaused = true;else isPaused = false;\n      }, 1000);\n    }\n  }\n}\n\n//# sourceURL=webpack://art-quiz/./src/pages/ArtistQuestion/ArtistQuestion.js?");

/***/ }),

/***/ "./src/pages/ArtistQuestion/index.js":
/*!*******************************************!*\
  !*** ./src/pages/ArtistQuestion/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ArtistQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArtistQuestion */ \"./src/pages/ArtistQuestion/ArtistQuestion.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ArtistQuestion__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://art-quiz/./src/pages/ArtistQuestion/index.js?");

/***/ }),

/***/ "./src/pages/Artist/Artist.js":
/*!************************************!*\
  !*** ./src/pages/Artist/Artist.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Artist)\n/* harmony export */ });\n/* harmony import */ var _Pictures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Pictures */ \"./src/pages/Pictures/index.js\");\n\nclass Artist {\n  render() {\n    const mainContainer = document.querySelector('.main__wrapper');\n    const preloader = document.querySelector('.preloader');\n    const template = `\n      <div class=\"artist\">\n        <div class=\"page__header\">\n          <button class=\"settings button__controller\" data-page=\"Settings\"></button>\n          <img src=\"assets/small-logo.svg\" alt=\"logo\" class=\"small__logo\">\n          <button class=\"button button__controller\" data-page=\"Main\">Home</button>\n          <button class=\"button\">Categories</button>\n        </div>\n        <div class=\"cards__container\">${this.cardFill()}</div>\n      </div>\n    `;\n    preloader.classList.add('show__preloader');\n    mainContainer.innerHTML = '';\n    mainContainer.insertAdjacentHTML('beforeend', template);\n    setTimeout(() => {\n      preloader.classList.remove('show__preloader');\n    }, 1000);\n    document.querySelectorAll('.score__btn').forEach(item => {\n      const attribute = item.getAttribute('data-category');\n      new _Pictures__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().completedGames(attribute, item);\n    });\n  }\n  cardFill() {\n    const PICNUMBER = 240;\n    const PICSTART = 120;\n    const PICPERCATEGORIE = 10;\n    const categories = ['Portrait', 'Landscape', 'Still Life', 'Graphic', 'Antique', 'Avant-Garde', 'Renaissance', 'Surrealism', 'Kitsch', 'Minimalism', 'Avangard', 'Industrial'];\n    let result = '';\n    for (let i = PICSTART; i < PICNUMBER; i += 1) {\n      if (i % PICPERCATEGORIE === 0) {\n        const cardItem = `\n        <div class=\"card__item\">\n          <div class=\"card__title__wrap\">\n            <span class=\"card__title\">${categories[(i - PICSTART) / PICPERCATEGORIE]}</span>\n            <p class=\"score\">${new _Pictures__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().getLocalStorageData(i)}</p>\n          </div>\n          <div class=\"card__img__wrap\">\n            <img class=\"card__img button__controller\" src=\"https://raw.githubusercontent.com/Suficks/image-data/master/img/${i}.jpg\" data-page=\"ArtistQuestion\" data-category=\"${i}\" alt=\"cardPic\">\n            <button class=\"score__btn button__controller\" data-page=\"Score\" data-prevPage=\"Artist\" data-category=\"${i}\">Score</button>\n          </div>\n        </div>\n        `;\n        result += cardItem;\n      }\n    }\n    return result;\n  }\n}\n\n//# sourceURL=webpack://art-quiz/./src/pages/Artist/Artist.js?");

/***/ }),

/***/ "./src/pages/Artist/index.js":
/*!***********************************!*\
  !*** ./src/pages/Artist/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Artist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Artist */ \"./src/pages/Artist/Artist.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Artist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://art-quiz/./src/pages/Artist/index.js?");

/***/ }),

/***/ "./src/pages/EndGameModal/EndGameModal.js":
/*!************************************************!*\
  !*** ./src/pages/EndGameModal/EndGameModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EndGameModal)\n/* harmony export */ });\nclass EndGameModal {\n  render(page, pageQuestion) {\n    return `\n      <div class=\"end__game\">\n        <img src=\"\" alt=\"trophy\" class=\"end__img\">\n        <h2 class=\"end__game__text\"></h2>\n        <h2 class=\"final__result\"></h2>\n        <div class=\"buttons__containter\">\n          <button class=\"end__btn home__btn button__controller\" data-page=\"${page}\"></button>\n          <button class=\"end__btn next__quiz__btn button__controller\" data-page=\"${pageQuestion}\"></button>\n        </div>\n      </div>\n    `;\n  }\n  modalOpen() {\n    const endGameModal = document.querySelector('.end__game');\n    const overlay = document.querySelector('.overlay');\n    endGameModal.classList.add('modal__active');\n    overlay.classList.add('overlay__active');\n  }\n}\n\n//# sourceURL=webpack://art-quiz/./src/pages/EndGameModal/EndGameModal.js?");

/***/ }),

/***/ "./src/pages/EndGameModal/index.js":
/*!*****************************************!*\
  !*** ./src/pages/EndGameModal/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _EndGameModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndGameModal */ \"./src/pages/EndGameModal/EndGameModal.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_EndGameModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://art-quiz/./src/pages/EndGameModal/index.js?");

/***/ }),

/***/ "./src/pages/Main/Main.js":
/*!********************************!*\
  !*** ./src/pages/Main/Main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\nclass Main {\n  render() {\n    const mainContainer = document.querySelector('.main__wrapper');\n    const template = `\n    <div class=\"main__page\">\n      <button class=\"button__controller settings\" data-page=\"Settings\"></button>\n      <div class=\"main\">\n        <img src=\"assets/main-logo.svg\" alt=\"logo\" class=\"main__logo\">\n        <button class=\"button button__controller\" data-page=\"Artist\">Artist quiz</button>\n        <button class=\"button button__controller\" data-page=\"Pictures\">Pictures quiz</button>\n      </div>\n    </div>\n    `;\n    mainContainer.innerHTML = '';\n    mainContainer.insertAdjacentHTML('beforeend', template);\n  }\n}\n\n//# sourceURL=webpack://art-quiz/./src/pages/Main/Main.js?");

/***/ }),

/***/ "./src/pages/Main/index.js":
/*!*********************************!*\
  !*** ./src/pages/Main/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ \"./src/pages/Main/Main.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://art-quiz/./src/pages/Main/index.js?");

/***/ }),

/***/ "./src/pages/PictureQuestion/PictureQuestion.js":
/*!******************************************************!*\
  !*** ./src/pages/PictureQuestion/PictureQuestion.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   audioFiles: () => (/* binding */ audioFiles),\n/* harmony export */   \"default\": () => (/* binding */ PictureQuestion)\n/* harmony export */ });\n/* harmony import */ var _QuitModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../QuitModal */ \"./src/pages/QuitModal/index.js\");\n/* harmony import */ var _AnswerModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AnswerModal */ \"./src/pages/AnswerModal/index.js\");\n/* harmony import */ var _EndGameModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EndGameModal */ \"./src/pages/EndGameModal/index.js\");\n/* eslint-disable no-unsafe-optional-chaining */\n/* eslint-disable import/no-cycle */\n\n\n\nconst QUESTION_LENGTH = 10;\nconst correctAnswerAudio = new Audio();\ncorrectAnswerAudio.src = './assets/correct-sound.mp3';\nconst incorrectAnswerAudio = new Audio();\nincorrectAnswerAudio.src = './assets/incorrect-sound.mp3';\nconst winningAudio = new Audio();\nwinningAudio.src = './assets/winning-sound.mp3';\nconst perfectResultAudio = new Audio();\nperfectResultAudio.src = './assets/perfect-sound.mp3';\nconst loseAudio = new Audio();\nloseAudio.src = './assets/lose-sound.mp3';\nconst audioFiles = [correctAnswerAudio, incorrectAnswerAudio, winningAudio, perfectResultAudio, loseAudio];\nclass PictureQuestion {\n  constructor() {\n    this.state = {\n      dataCategory: 0,\n      pictureNum: 0,\n      data: [],\n      correctAnswerCount: 0,\n      answerForEachPic: []\n    };\n  }\n  async render(_, dataCategory, setEventListener) {\n    this.state.dataCategory = +dataCategory;\n    this.state.pictureNum = +dataCategory || this.state.pictureNum;\n    await this.dataFetch();\n    const mainContainer = document.querySelector('.main__wrapper');\n    const template = `\n      <div class=\"question\">\n        <img class=\"close picture__close\" src=\"assets/close-logo.svg\" alt=\"close\">\n        <div class=\"progress__wrap\">\n          <progress class=\"progress__bar\" value=\"0\" max=\"100\"></progress>\n          <span class=\"timer\">0:${this.getLocalStorageData()?.timeToAnswer}</span>\n        </div>\n        <p class=\"main__question\">Who is the author of this picture?</p>\n        <img class=\"question__img\" src=\"https://raw.githubusercontent.com/Suficks/image-data/master/img/${this.state.pictureNum}.jpg\" alt=\"question\">\n        <div class=\"buttons__wrap\"></div>\n        <div class=\"progress__dots\">\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n          <span class=\"progress__dot\"></span>\n        </div>\n        ${new _AnswerModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().render()}\n        ${new _QuitModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().render('Pictures')}\n        ${new _EndGameModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().render('Pictures', 'PictureQuestion')}\n        <div class=\"overlay\"></div>\n      </div >\n    `;\n    mainContainer.innerHTML = '';\n    mainContainer.insertAdjacentHTML('beforeend', template);\n    this.getAuthors();\n    setEventListener();\n    this.answerCheck();\n    this.nextQuestion();\n    this.setTimeGame();\n    audioFiles.forEach(audio => {\n      audio.volume = +this.getLocalStorageData('settings')?.volume / 100 || 0.5;\n    });\n    new _QuitModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().modalToggle();\n  }\n  async dataFetch() {\n    const url = 'https://raw.githubusercontent.com/Suficks/image-data/master/images.json';\n    const res = await fetch(url);\n    this.state.data = await res.json();\n  }\n  getAuthors() {\n    const {\n      pictureNum,\n      data\n    } = this.state;\n    const buttonContainer = document.querySelector('.buttons__wrap');\n    const buttons = new Set();\n    const correctAnswer = data[pictureNum].author;\n    const correctButton = `<button class=\"question__btn\">${correctAnswer}</button>`;\n    while (buttons.size < 4) {\n      buttons.add(correctButton);\n      const randomAuthor = Math.floor(Math.random() * 240);\n      const {\n        author\n      } = data[randomAuthor];\n      const button = `<button class=\"question__btn\">${author}</button>`;\n      buttons.add(button);\n    }\n    const shuffleButtons = this.shuffle([...buttons]);\n    buttonContainer.innerHTML = '';\n    shuffleButtons.forEach(item => {\n      buttonContainer.insertAdjacentHTML('beforeend', item);\n    });\n  }\n  shuffle(array) {\n    for (let i = array.length - 1; i > 0; i -= 1) {\n      const j = Math.floor(Math.random() * (i + 1));\n      [array[i], array[j]] = [array[j], array[i]];\n    }\n    return array;\n  }\n  answerCheck(seconds) {\n    const {\n      pictureNum,\n      data\n    } = this.state;\n    const {\n      author,\n      name,\n      year\n    } = data[pictureNum];\n    const answers = document.querySelectorAll('.question__btn');\n    const correctAuthor = document.querySelector('.current__author');\n    const correctName = document.querySelector('.current__name');\n    const correctYear = document.querySelector('.current__year');\n    const currentPic = document.querySelector('.current__img');\n    const questionPic = document.querySelector('.question__img');\n    const progressDots = [...document.querySelectorAll('.progress__dot')];\n    const correctIcon = document.querySelector('.correct__icon');\n    const dotsCount = pictureNum % 10;\n    answers.forEach(item => {\n      item.addEventListener('click', () => {\n        if (item.textContent === author) {\n          correctIcon.src = 'assets/correct-icon.svg';\n          progressDots[dotsCount].style.backgroundColor = '#47A76A';\n          this.state.correctAnswerCount += 1;\n          this.state.answerForEachPic.push(true);\n          correctAnswerAudio.play();\n        } else {\n          correctIcon.src = 'assets/incorrect-icon.svg';\n          progressDots[dotsCount].style.backgroundColor = '#FFBCA2';\n          this.state.answerForEachPic.push(false);\n          incorrectAnswerAudio.play();\n        }\n        currentPic.src = questionPic.src;\n        correctAuthor.innerHTML = author;\n        correctName.innerHTML = name;\n        correctYear.innerHTML = year;\n        new _AnswerModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().modalToggle();\n      });\n    });\n    if (seconds === 0) {\n      correctIcon.src = 'assets/correct-icon.svg';\n      progressDots[dotsCount].style.backgroundColor = '#FFBCA2';\n      this.state.answerForEachPic.push(false);\n      incorrectAnswerAudio.play();\n      currentPic.src = questionPic.src;\n      correctAuthor.innerHTML = author;\n      correctName.innerHTML = name;\n      correctYear.innerHTML = year;\n      new _AnswerModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().modalToggle();\n    }\n  }\n  nextQuestion() {\n    const nextBtn = document.querySelector('.next__button');\n    nextBtn.addEventListener('click', () => {\n      const {\n        pictureNum,\n        dataCategory\n      } = this.state;\n      if (pictureNum === dataCategory + QUESTION_LENGTH - 1) {\n        new _AnswerModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().modalClose();\n        this.endGame();\n        return;\n      }\n      const questionPic = document.querySelector('.question__img');\n      this.state.pictureNum += 1;\n      questionPic.src = `https://raw.githubusercontent.com/Suficks/image-data/master/img/${this.state.pictureNum}.jpg`;\n      this.getAuthors();\n      this.answerCheck();\n      new _AnswerModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().modalToggle();\n      this.setTimeGame();\n    });\n  }\n  endGame() {\n    const {\n      correctAnswerCount,\n      dataCategory\n    } = this.state;\n    const endImg = document.querySelector('.end__img');\n    const finalText = document.querySelector('.end__game__text');\n    const result = document.querySelector('.final__result');\n    const homeBtn = document.querySelector('.home__btn');\n    const nextQuizBtn = document.querySelector('.next__quiz__btn');\n    if (correctAnswerCount < 5) {\n      endImg.src = 'assets/lose-trophy.svg';\n      finalText.innerHTML = 'Game over';\n      result.innerHTML = 'Play again?';\n      homeBtn.innerHTML = 'No';\n      nextQuizBtn.innerHTML = 'Yes';\n      nextQuizBtn.setAttribute('data-category', dataCategory);\n      loseAudio.play();\n    } else if (correctAnswerCount === 10) {\n      endImg.src = 'assets/stars.svg';\n      endImg.style.width = '240px';\n      finalText.innerHTML = 'Grand result';\n      result.innerHTML = 'Congratulations!';\n      homeBtn.innerHTML = 'Home';\n      nextQuizBtn.innerHTML = 'Next Quiz';\n      nextQuizBtn.setAttribute('data-category', dataCategory + QUESTION_LENGTH);\n      perfectResultAudio.play();\n      this.setLocalStorageData();\n    } else {\n      endImg.src = 'assets/trophy.svg';\n      finalText.innerHTML = 'Congratulations!';\n      result.innerHTML = `${correctAnswerCount} / 10`;\n      homeBtn.innerHTML = 'Home';\n      nextQuizBtn.innerHTML = 'Next Quiz';\n      nextQuizBtn.setAttribute('data-category', dataCategory + QUESTION_LENGTH);\n      winningAudio.play();\n      this.setLocalStorageData();\n    }\n    new _EndGameModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().modalOpen();\n  }\n  setLocalStorageData() {\n    const {\n      correctAnswerCount,\n      dataCategory,\n      answerForEachPic\n    } = this.state;\n    localStorage.setItem(dataCategory, JSON.stringify(correctAnswerCount));\n    localStorage.setItem(`${dataCategory}-result`, JSON.stringify(answerForEachPic));\n  }\n  getLocalStorageData() {\n    return JSON.parse(localStorage.getItem('settings'));\n  }\n  setTimeGame() {\n    const progressBar = document.querySelector('.progress__bar');\n    const progressWrap = document.querySelector('.progress__wrap');\n    const progressTime = document.querySelector('.timer');\n    const answerModal = document.querySelector('.answer__modal');\n    const quitModal = document.querySelector('.quit__game__modal');\n    const newTime = this.getLocalStorageData()?.timeToAnswer * 10;\n    let seconds = +this.getLocalStorageData()?.timeToAnswer;\n    let start = 0;\n    let isPaused = false;\n    if (this.getLocalStorageData()?.isTimeGame) {\n      progressWrap.classList.add('progress__active');\n      const intervalId = setInterval(() => {\n        if (!isPaused) {\n          if (start > 100 || answerModal.classList.contains('modal__active')) clearInterval(intervalId);else progressBar.value = start;\n          start += 1;\n        }\n      }, newTime);\n      const timer = setInterval(() => {\n        if (!isPaused) {\n          if (seconds > 9) progressTime.innerHTML = `0:${seconds}`;else progressTime.innerHTML = `0:0${seconds}`;\n          seconds -= 1;\n          if (answerModal.classList.contains('modal__active')) clearInterval(timer);\n          if (seconds === 0) this.answerCheck(seconds);\n        }\n        if (quitModal.classList.contains('modal__active')) isPaused = true;else isPaused = false;\n      }, 1000);\n    }\n  }\n}\n\n//# sourceURL=webpack://art-quiz/./src/pages/PictureQuestion/PictureQuestion.js?");

/***/ }),

/***/ "./src/pages/PictureQuestion/index.js":
/*!********************************************!*\
  !*** ./src/pages/PictureQuestion/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   audioFiles: () => (/* reexport safe */ _PictureQuestion__WEBPACK_IMPORTED_MODULE_0__.audioFiles),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _PictureQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PictureQuestion */ \"./src/pages/PictureQuestion/PictureQuestion.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PictureQuestion__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://art-quiz/./src/pages/PictureQuestion/index.js?");

/***/ }),

/***/ "./src/pages/Pictures/Pictures.js":
/*!****************************************!*\
  !*** ./src/pages/Pictures/Pictures.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pictures)\n/* harmony export */ });\nclass Pictures {\n  render() {\n    const mainContainer = document.querySelector('.main__wrapper');\n    const preloader = document.querySelector('.preloader');\n    const template = `\n      <div class=\"pictures\">\n        <div class=\"page__header\">\n          <button class=\"settings button__controller\" data-page=\"Settings\"></button>\n          <img src=\"assets/small-logo.svg\" alt=\"logo\" class=\"small__logo\">\n          <button class=\"button button__controller\" data-page=\"Main\">Home</button>\n          <button class=\"button\">Categories</button>\n        </div>\n        <div class=\"cards__container\">${this.cardFill()}</div>\n      </div>\n    `;\n    preloader.classList.add('show__preloader');\n    mainContainer.innerHTML = '';\n    mainContainer.insertAdjacentHTML('beforeend', template);\n    setTimeout(() => {\n      preloader.classList.remove('show__preloader');\n    }, 1000);\n    document.querySelectorAll('.score__btn').forEach(item => {\n      const attribute = item.getAttribute('data-category');\n      this.completedGames(attribute, item);\n    });\n  }\n  cardFill() {\n    const PICNUMBER = 120;\n    const PICPERCATEGORIE = 10;\n    const categories = ['Portrait', 'Landscape', 'Still Life', 'Graphic', 'Antique', 'Avant-Garde', 'Renaissance', 'Surrealism', 'Kitsch', 'Minimalism', 'Avangard', 'Industrial'];\n    let result = '';\n    for (let i = 0; i < PICNUMBER; i += 1) {\n      if (i % PICPERCATEGORIE === 0) {\n        const cardItem = `\n        <div class=\"card__item\">\n          <div class=\"card__title__wrap\">\n            <span class=\"card__title\">${categories[i / PICPERCATEGORIE]}</span>\n            <p class=\"score\">${this.getLocalStorageData(i)}</p>\n          </div>\n          <div class=\"card__img__wrap\">\n            <img class=\"card__img button__controller\" src=\"https://raw.githubusercontent.com/Suficks/image-data/master/img/${i}.jpg\" data-page=\"PictureQuestion\" data-category=\"${i}\" alt=\"cardPic\">\n            <button class=\"score__btn button__controller\" data-page=\"Score\" data-prevPage=\"Pictures\" data-category=\"${i}\">Score</button>\n          </div>\n        </div>\n        `;\n        result += cardItem;\n      }\n    }\n    return result;\n  }\n  getLocalStorageData(key) {\n    const localStorageData = JSON.parse(localStorage.getItem(key));\n    if (localStorageData !== null) {\n      return `${localStorageData} / 10`;\n    }\n    return '';\n  }\n  completedGames(key, item) {\n    const img = item.previousElementSibling;\n    const localStorageData = JSON.parse(localStorage.getItem(key));\n    if (localStorageData !== null) {\n      item.classList.add('score__active');\n      img.classList.add('card__img__color');\n    }\n  }\n}\n\n//# sourceURL=webpack://art-quiz/./src/pages/Pictures/Pictures.js?");

/***/ }),

/***/ "./src/pages/Pictures/index.js":
/*!*************************************!*\
  !*** ./src/pages/Pictures/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Pictures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pictures */ \"./src/pages/Pictures/Pictures.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Pictures__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://art-quiz/./src/pages/Pictures/index.js?");

/***/ }),

/***/ "./src/pages/QuitModal/QuitModal.js":
/*!******************************************!*\
  !*** ./src/pages/QuitModal/QuitModal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QuitModal)\n/* harmony export */ });\nclass QuitModal {\n  render(page) {\n    return `\n    <div class=\"quit__game__modal\">\n          <img class=\"close modal__close\" src=\"assets/close-logo-black.svg\" alt=\"close\">\n          <p class=\"quit__text\">Do you really want to quit the game?</p>\n          <div class=\"quit__buttons__wrap\">\n            <button class=\"button cancel__btn\">Cancel</button>\n            <button class=\"button button__controller\" data-page=\"${page}\">Yes</button>\n          </div>\n    </div>\n    `;\n  }\n  modalToggle() {\n    const quitGameBtn = document.querySelector('.picture__close');\n    const closeModalBtn = document.querySelector('.modal__close');\n    const cancelBtn = document.querySelector('.cancel__btn');\n    new QuitModal().modalToggleSetListener(quitGameBtn);\n    new QuitModal().modalToggleSetListener(closeModalBtn);\n    new QuitModal().modalToggleSetListener(cancelBtn);\n  }\n  modalToggleSetListener(btn) {\n    const quitGameModal = document.querySelector('.quit__game__modal');\n    const overlay = document.querySelector('.overlay');\n    btn.addEventListener('click', () => {\n      quitGameModal.classList.toggle('modal__active');\n      overlay.classList.toggle('overlay__active');\n    });\n  }\n}\n\n//# sourceURL=webpack://art-quiz/./src/pages/QuitModal/QuitModal.js?");

/***/ }),

/***/ "./src/pages/QuitModal/index.js":
/*!**************************************!*\
  !*** ./src/pages/QuitModal/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _QuitModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuitModal */ \"./src/pages/QuitModal/QuitModal.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_QuitModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://art-quiz/./src/pages/QuitModal/index.js?");

/***/ }),

/***/ "./src/pages/Score/Score.js":
/*!**********************************!*\
  !*** ./src/pages/Score/Score.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Score)\n/* harmony export */ });\nclass Score {\n  constructor() {\n    this.state = {\n      data: [],\n      pageBeforeScore: ''\n    };\n  }\n  async render(_, dataCategory, setEventListener, pageBeforeScore) {\n    this.state.pageBeforeScore = pageBeforeScore;\n    await this.dataFetch();\n    const mainContainer = document.querySelector('.main__wrapper');\n    const preloader = document.querySelector('.preloader');\n    const template = `\n      <div class=\"score__page\">\n        <div class=\"page__header\">\n          <button class=\"settings button__controller\" data-page=\"Settings\"></button>\n          <img src=\"assets/small-logo.svg\" alt=\"logo\" class=\"small__logo\">\n          <button class=\"button button__controller\" data-page=\"Main\">Home</button>\n          <button class=\"button button__controller\" data-page=\"${pageBeforeScore}\">Categories</button>\n          <button class=\"score\">Score</button>\n        </div>\n        <div class=\"cards__container\">${this.cardFill(+dataCategory)}</div>\n      </div>\n    `;\n    preloader.classList.add('show__preloader');\n    mainContainer.innerHTML = '';\n    mainContainer.insertAdjacentHTML('beforeend', template);\n    setTimeout(() => {\n      preloader.classList.remove('show__preloader');\n    }, 1000);\n    setEventListener();\n    this.setCorrectImg(dataCategory);\n  }\n  async dataFetch() {\n    const url = 'https://raw.githubusercontent.com/Suficks/image-data/master/images.json';\n    const res = await fetch(url);\n    this.state.data = await res.json();\n  }\n  cardFill(dataCategory) {\n    const PICPERCATEGORIE = 10;\n    let result = '';\n    for (let i = dataCategory; i < dataCategory + PICPERCATEGORIE; i += 1) {\n      const cardItem = `\n        <div class=\"card__item\">\n          <img class=\"card__img\" src=\"https://raw.githubusercontent.com/Suficks/image-data/master/img/${i}.jpg\" alt=\"cardPic\">\n          <div class=\"answer\">\n            <p class=\"current__name\">${this.state.data[i].name}</p>\n            <p class=\"current__author__year\">${this.state.data[i].author}, ${this.state.data[i].year}</p>\n          </div>\n        </div>\n      `;\n      result += cardItem;\n    }\n    return result;\n  }\n  setCorrectImg(key) {\n    const array = this.getLocalStorageData(`${key}-result`);\n    const imgs = document.querySelectorAll('.card__img');\n    imgs.forEach((item, index) => {\n      const answerActive = () => item.nextElementSibling.classList.toggle('answer__active');\n      if (array[index] === true) {\n        item.classList.add('img__correct');\n        item.addEventListener('mouseenter', answerActive);\n        item.addEventListener('mouseleave', answerActive);\n      } else if (this.state.pageBeforeScore === 'Artist') {\n        item.classList.add('img__incorrect');\n      }\n    });\n  }\n  getLocalStorageData(key) {\n    const localStorageData = JSON.parse(localStorage.getItem(key));\n    return localStorageData;\n  }\n}\n\n//# sourceURL=webpack://art-quiz/./src/pages/Score/Score.js?");

/***/ }),

/***/ "./src/pages/Score/index.js":
/*!**********************************!*\
  !*** ./src/pages/Score/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Score */ \"./src/pages/Score/Score.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Score__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://art-quiz/./src/pages/Score/index.js?");

/***/ }),

/***/ "./src/pages/SettingsPage/Settings.js":
/*!********************************************!*\
  !*** ./src/pages/SettingsPage/Settings.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Settings)\n/* harmony export */ });\nlet isTimeGame = false;\nlet timeToAnswer = 20;\nlet savedVolume = 50;\nconst settings = {\n  volume: 50,\n  isTimeGame: false,\n  timeToAnswer: 20\n};\nclass Settings {\n  render(pageBeforeSettings) {\n    const mainContainer = document.querySelector('.main__wrapper');\n    const template = `\n      <div class=\"settings__page\">\n        <div class=\"page__header\">\n          <button class=\"button__controller\" data-page=\"Main\">Home</button>\n          <img class=\"close button__controller\" src=\"assets/close-logo.svg\" alt=\"close\" data-page=\"${pageBeforeSettings}\">\n        </div>\n        <div class=\"settings__wrap\">\n          <label class=\"label\">\n            <p class=\"label__name\">Volume</p>\n            <input type=\"range\" class=\"volume\">\n            <img class=\"volume__logo\" src=\"assets/volume.svg\">\n            <img class=\"volume__logo volume__mute\" src=\"assets/volume-mute.svg\">\n          </label>\n           <label class=\"label\">\n            <p class=\"label__name\">Time game</p>\n            <span class=\"time__on\">Off</span>\n            <input type=\"checkbox\" class=\"time__checkbox\">\n            <span class=\"fake\"></span>\n            </label>\n          <label class=\"label\">\n            <p class=\"label__name\">Time to answer</p>\n            <button class=\"minus\" onclick=\"this.nextElementSibling.stepDown();\">–</button>\n            <input type=\"number\" class=\"time\" value=\"20\" max=\"30\" step=\"5\" min=\"5\">\n            <button class=\"plus\" onclick=\"this.previousElementSibling.stepUp();\">+</button>\n           </label>\n        </div>\n        <div class=\"buttons__wrap\">\n          <button class=\"button default__btn\">Default</button>\n          <button class=\"button save__btn\">Save</button>  \n        </div>\n        <div class=\"save__modal\">Settings save!</div>\n      </div>\n    `;\n    mainContainer.innerHTML = '';\n    mainContainer.insertAdjacentHTML('beforeend', template);\n    this.audioVolume();\n    this.setTimeGame();\n    this.setTimeToAnswer();\n    this.setSettings();\n  }\n  audioVolume() {\n    const volumeInput = document.querySelector('.volume');\n    volumeInput.addEventListener('input', () => {\n      savedVolume = volumeInput.value;\n      volumeInput.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${volumeInput.value}%, rgb(196, 196, 196) ${volumeInput.value}%, rgb(196, 196, 196) 100%)`;\n    });\n  }\n  setTimeGame() {\n    const checkbox = document.querySelector('.time__checkbox');\n    const checkboxState = document.querySelector('.time__on');\n    checkbox.addEventListener('change', () => {\n      if (checkbox.checked) {\n        checkboxState.innerHTML = 'On';\n        isTimeGame = true;\n      } else {\n        checkboxState.innerHTML = 'Off';\n        isTimeGame = false;\n      }\n    });\n  }\n  setTimeToAnswer() {\n    const timeInput = document.querySelector('.time');\n    const buttons = [document.querySelector('.minus'), document.querySelector('.plus')];\n    buttons.forEach(item => [item.addEventListener('click', () => {\n      timeToAnswer = timeInput.value;\n    })]);\n  }\n  setSettings() {\n    const defaultBtn = document.querySelector('.default__btn');\n    const saveBtn = document.querySelector('.save__btn');\n    const volumeInput = document.querySelector('.volume');\n    const checkbox = document.querySelector('.time__checkbox');\n    const timeInput = document.querySelector('.time');\n    const checkboxState = document.querySelector('.time__on');\n    const saveModal = document.querySelector('.save__modal');\n    const localStorageData = JSON.parse(localStorage.getItem('settings'));\n    if (localStorageData) {\n      volumeInput.value = localStorageData.volume;\n      checkbox.checked = localStorageData.isTimeGame;\n      timeInput.value = localStorageData.timeToAnswer;\n      savedVolume = localStorageData.volume;\n      isTimeGame = localStorageData.isTimeGame;\n      timeToAnswer = localStorageData.timeToAnswer;\n      volumeInput.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${localStorageData.volume}%, rgb(196, 196, 196) ${localStorageData.volume}%, rgb(196, 196, 196) 100%)`;\n      if (checkbox.checked) checkboxState.innerHTML = 'On';else checkboxState.innerHTML = 'Off';\n    }\n    defaultBtn.addEventListener('click', () => {\n      volumeInput.value = 50;\n      checkbox.checked = false;\n      timeInput.value = 20;\n      volumeInput.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${volumeInput.value}%, rgb(196, 196, 196) ${volumeInput.value}%, rgb(196, 196, 196) 100%)`;\n      checkboxState.innerHTML = 'Off';\n      localStorage.removeItem('settings');\n    });\n    saveBtn.addEventListener('click', () => {\n      settings.volume = savedVolume;\n      settings.isTimeGame = isTimeGame;\n      if (timeToAnswer < 9) settings.timeToAnswer = `0${timeToAnswer}`;else settings.timeToAnswer = timeToAnswer;\n      localStorage.setItem('settings', JSON.stringify(settings));\n      saveModal.classList.add('save__modal__active');\n      setTimeout(() => {\n        saveModal.classList.remove('save__modal__active');\n      }, 2000);\n    });\n  }\n}\n\n//# sourceURL=webpack://art-quiz/./src/pages/SettingsPage/Settings.js?");

/***/ }),

/***/ "./src/pages/SettingsPage/index.js":
/*!*****************************************!*\
  !*** ./src/pages/SettingsPage/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings */ \"./src/pages/SettingsPage/Settings.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://art-quiz/./src/pages/SettingsPage/index.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./common/img/favicon.png */ \"./src/common/img/favicon.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./common/img/rs-school-logo.svg */ \"./src/common/img/rs-school-logo.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <link rel=\\\"icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" type=\\\"image/ico\\\">\\n  <title>Art Quiz</title>\\n</head>\\n\\n<body>\\n  <div class=\\\"main__wrapper\\\"></div>\\n  <div class=\\\"preloader\\\"></div>\\n  <footer class=\\\"footer\\\">\\n    <a href=\\\"https://rs.school/\\\" class=\\\"school__link\\\" target=\\\"_blank\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"\\n        alt=\\\"school\\\" class=\\\"logo\\\"></a>\\n    <div class=\\\"github__wrap\\\">\\n      <p class=\\\"footer__item\\\">App developer: </p>\\n      <a href=\\\"https://github.com/Suficks\\\" class=\\\"link\\\" target=\\\"_blank\\\">Suficks</a>\\n    </div>\\n    <p class=\\\"footer__item\\\">2023</p>\\n  </footer>\\n</body>\\n\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://art-quiz/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://art-quiz/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://art-quiz/./src/index.scss?");

/***/ }),

/***/ "./src/common/img/favicon.png":
/*!************************************!*\
  !*** ./src/common/img/favicon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/favicon.png\";\n\n//# sourceURL=webpack://art-quiz/./src/common/img/favicon.png?");

/***/ }),

/***/ "./src/common/img/rs-school-logo.svg":
/*!*******************************************!*\
  !*** ./src/common/img/rs-school-logo.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/rs-school-logo.svg\";\n\n//# sourceURL=webpack://art-quiz/./src/common/img/rs-school-logo.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;