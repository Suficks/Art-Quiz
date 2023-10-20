import { audioFiles } from '../PictureQuestion';

let savedVolume = 50;

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
            <input type="range" value="${savedVolume}" class="volume">
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
            <input type="number" class="time" value="20">
            <button class="plus" onclick="this.previousElementSibling.stepUp();">+</button>
           </label>
        </div>
        <div class="buttons__wrap">
          <button class="button">Default</button>
          <button class="button save__btn">Save</button>  
        </div>
      </div>
    `;

    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', template);
    this.audioVolume();
  }

  audioVolume() {
    const volumeInput = document.querySelector('.volume');
    volumeInput.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${savedVolume}%, rgb(196, 196, 196) ${savedVolume}%, rgb(196, 196, 196) 100%)`;

    volumeInput.addEventListener('input', () => {
      savedVolume = volumeInput.value;
      audioFiles.forEach((audio) => {
        audio.volume = savedVolume / 100;
      });
      volumeInput.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${volumeInput.value}%, rgb(196, 196, 196) ${volumeInput.value}%, rgb(196, 196, 196) 100%)`;
    });
  }
}
