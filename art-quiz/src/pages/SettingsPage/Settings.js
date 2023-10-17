export default class Settings {
  render(pageBeforeSettings) {
    return `
      <div class="settings__page">
        <div class="page__header">
          <button class="button__controller" data-page="Main">Home</button>
          <img class="close button__controller" src="assets/close-logo.svg" alt="close" data-page="${pageBeforeSettings}">
        </div>
        <div class="settings__wrap">
          <label class="label">
            <p class="label__name">Volume</p>
            <input type="range" value="50" class="volume">
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
  }
}
