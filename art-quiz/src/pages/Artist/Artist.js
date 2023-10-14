/* eslint-disable class-methods-use-this */
// class GetData {
//   async get() {
//     const url = 'https://github.com/Suficks/image-data';
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//   }
// }
// new GetData().get();

export default class Artist {
  render() {
    return `
      <div class="artist">
        <div class="page__header">
          <button class="settings button__controller" data-page="Settings"></button>
          <img src="assets/small-logo.svg" alt="logo" class="small__logo">
          <button class="button button__controller" data-page="Main">Home</button>
          <button class="button">Categories</button>
        </div>
        <div class="cards__container">
          
          <p class="score"></p>
          <img class="card__img" href="" alt="">
        </div>
      </div>
    `;
  }
}
