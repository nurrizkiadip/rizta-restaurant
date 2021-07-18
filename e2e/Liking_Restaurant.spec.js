const assert = require('assert');

Feature('Liking Movies');

Before(({ I }) => {
  // setiap testing pertama2 ditujukan pada halaman favorite 
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked movies', ({ I }) => {
  I.seeElement('.no-favorite-found-img');
});

Scenario('liking one movie', async ({ I }) => {
  I.seeElement('.no-favorite-found-img');

  I.amOnPage('/');

  I.seeElement('.card-body h3.name a');

  // mengambil data resto pertama
  const firstResto = locate('.card-body h3.name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  // memeriksa tombol favorite
  I.seeElement('#favorite-btn');
  I.click('#favorite-btn');

   // memastikan favorite resto tersedia 1
   I.amOnPage('/#/favorite');
  I.seeElement('li.card');

  // memeriksa kesesuaian nama resto yang disukai
  const firstLikedResto = locate('.card-body h3.name a').first();
  const likedRestoTitle = await I.grabTextFrom(firstLikedResto);

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
  I.click(firstLikedResto);

  // memeriksa tombol favorite
  I.seeElement('#favorite-btn');
  I.click('#favorite-btn');

  // memastikan favorite resto kosong
  I.amOnPage('/#/favorite');
  I.seeElement('.no-favorite-found-img');

});
