
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          id: 1,
          name: 'Map of New Zealand\'s 9 Great Walks',
          description: 'Front-end application. HTML5, CSS3, Javascript, jQuery.',
          project_url: 'https://annaulyanova.github.io/nz-great-walks-map',
          image_url: '/img/nz-map.png'}),
        knex('projects').insert({
          id: 2,
          name: 'Espiral Dev Academy Blog | Phase 0',
          description: 'Server-side rendering application. Node.js,  Handlebars.js, Knex.js',
          project_url: 'https://eda-blog.herokuapp.com/',
          image_url: '/img/eda-blog.png'}),
        knex('projects').insert({
          id: 3,
          name: 'Great adventure hiking in New Zealand',
          description: 'Client-side rendering application. React.js.',
          project_url: '#',
          image_url: '/img/nz-hiking.png'})
      ]);
    });
};
