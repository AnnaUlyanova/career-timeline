
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          id: 1,
          name: 'New Zealand Great Walks',
          project_url: 'https://annaulyanova.github.io/nz-great-walks-map',
          image_url: 'http://www.worldatlas.com/r/w728-h425-c728x425/upload/2a/75/45/quokka.jpg'}),
        knex('projects').insert({
          id: 2,
          name: 'Weather Application',
          project_url: 'annaulyanova.github.io/weather-app',
          image_url: 'http://weknowyourdreams.com/images/cheetah/cheetah-02.jpg'})
      ]);
    });
};
