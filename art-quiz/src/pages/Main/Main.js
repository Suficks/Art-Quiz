export default class Main {
  render() {
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

    this.pageShow(template);
  }

  pageShow(template) {
    const mainContainer = document.querySelector('.main__wrapper');

    mainContainer.style.opacity = '0';
    setTimeout(() => {
      mainContainer.innerHTML = '';
      mainContainer.insertAdjacentHTML('beforeend', template);
      mainContainer.style.opacity = '1';
    }, 800);
  }
}
