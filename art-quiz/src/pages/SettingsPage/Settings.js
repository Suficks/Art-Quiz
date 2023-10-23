import { audioFiles } from '../PictureQuestion';

let isSave = false;
let savedVolume = 50;
let isTimeGame = false;
let timeToAnswer = 20;

export default class Settings {
  render(pageBeforeSettings) {
    const mainContainer = document.querySelector('.main__wrapper');

    const template = `
      <div class="settings__page">
        <div class="page__header">
          <button class="button__controller" data-page="Main">Home</button>
          <img class="close button__controller" src="assets/close-logo.svg" alt="close" data-page="${pageBeforeSettings}">
        </div>
        <div class="settings__wrap">
          <label class="label">
            <p class="label__name">Volume</p>
            <input type="range" class="volume">
            <img class="volume__logo" src="assets/volume.svg">
            <img class="volume__logo volume__mute" src="assets/volume-mute.svg">
          </label>
           <label class="label">
            <p class="label__name">Time game</p>
            <span class="time__on">Off</span>
            <input type="checkbox" class="time__checkbox">
            <span class="fake"></span>
            </label>
          <label class="label">
            <p class="label__name">Time to answer</p>
            <button class="minus" onclick="this.nextElementSibling.stepDown();">–</button>
            <input type="number" class="time">
            <button class="plus" onclick="this.previousElementSibling.stepUp();">+</button>
           </label>
        </div>
        <div class="buttons__wrap">
          <button class="button default__btn">Default</button>
          <button class="button save__btn">Save</button>  
        </div>
      </div>
    `;

    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', template);
    this.audioVolume();
    this.setTimeGame();
    this.setTimeToAnswer();
    this.setSettings();
  }

  audioVolume() {
    const volumeInput = document.querySelector('.volume');

    volumeInput.addEventListener('input', () => {
      savedVolume = volumeInput.value;
      audioFiles.forEach((audio) => {
        audio.volume = savedVolume / 100;
      });
      volumeInput.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${volumeInput.value}%, rgb(196, 196, 196) ${volumeInput.value}%, rgb(196, 196, 196) 100%)`;
    });
  }

  setTimeGame() {
    const checkbox = document.querySelector('.time__checkbox');
    const checkboxState = document.querySelector('.time__on');

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        checkboxState.innerHTML = 'On';
        isTimeGame = true;
      } else {
        checkboxState.innerHTML = 'Off';
        isTimeGame = false;
      }
    });
  }

  setTimeToAnswer() {
    const timeInput = document.querySelector('.time');
    const buttons = [document.querySelector('.minus'), document.querySelector('.plus')];

    buttons.forEach((item) => [
      item.addEventListener('click', () => {
        timeToAnswer = timeInput.value;
      }),
    ]);
  }

  setSettings() {
    const defaultBtn = document.querySelector('.default__btn');
    const saveBtn = document.querySelector('.save__btn');
    const volumeInput = document.querySelector('.volume');
    const checkbox = document.querySelector('.time__checkbox');
    const timeInput = document.querySelector('.time');
    const checkboxState = document.querySelector('.time__on');

    if (isSave) {
      volumeInput.value = savedVolume;
      checkbox.checked = isTimeGame;
      timeInput.value = timeToAnswer;
      volumeInput.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${savedVolume}%, rgb(196, 196, 196) ${savedVolume}%, rgb(196, 196, 196) 100%)`;
      if (checkbox.checked) checkboxState.innerHTML = 'On';
      else checkboxState.innerHTML = 'Off';
    } else {
      timeInput.value = 20;
    }

    defaultBtn.addEventListener('click', () => {
      volumeInput.value = 50;
      checkbox.checked = false;
      timeInput.value = 20;
      volumeInput.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${volumeInput.value}%, rgb(196, 196, 196) ${volumeInput.value}%, rgb(196, 196, 196) 100%)`;
      checkboxState.innerHTML = 'Off';
      isSave = false;
    });

    saveBtn.addEventListener('click', () => {
      isSave = true;
    });
  }
}
