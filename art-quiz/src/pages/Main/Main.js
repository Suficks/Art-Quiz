export default class Main {
  render() {
    return `
    <div class="main__page">
      <button class="button__controller settings" data-page="Settings"></button>
      <div class="main">
        <img src="assets/main-logo.svg" alt="logo" class="main__logo">
        <button class="button button__controller" data-page="Artist">Artist quiz</button>
        <button class="button button__controller" data-page="Pictures">Pictures quiz</button>
      </div>
    </div>
    `;
  }
}
