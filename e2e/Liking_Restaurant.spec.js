const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  // setiap testing pertama2 ditujukan pada halaman favorite 
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.seeElement('.no-favorite-found-img');
});

Scenario('favoriting one resto', async ({ I }) => {
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

});

Scenario('unfavoriting one resto', async ({ I }) => {
  I.amOnPage('/');

  // memeriksa ketersediaan restaurant favorite
  I.seeElement('.card-body h3.name a');

  // mengambil data resto pertama
  const firstResto = locate('.card-body h3.name a').first();
  I.click(firstResto);

  // memeriksa tombol favorite
  I.seeElement('#favorite-btn');
  I.click('#favorite-btn');

   // memastikan favorite resto tersedia 1
  I.amOnPage('/#/favorite');
  I.seeElement('li.card');

  // click first resto favorited
  I.click(firstResto);

  // memeriksa tombol favorite
  I.seeElement('#favorite-btn');
  I.click('#favorite-btn');

  // menuju halaman favorite
  I.amOnPage('/#/favorite');

  // memastikan muncul no data
  I.seeElement('.no-favorite-found-img');
});
