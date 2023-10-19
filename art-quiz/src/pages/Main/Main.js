export default class Main {
  render() {
    const mainContainer = document.querySelector('.main__wrapper');

    const template = `
    <div class="main__page">
      <button class="button__controller settings" data-page="Settings"></button>
      <div class="main">
        <img src="assets/main-logo.svg" alt="logo" class="main__logo">
        <button class="button button__controller" data-page="Artist">Artist quiz</button>
        <button class="button button__controller" data-page="Pictures">Pictures quiz</button>
      </div>
    </div>
    `;

    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('beforeend', template);
  }
}
