
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          id: 1,
          name: 'goFLat',
          tech: 'Client-side rendering application. React.js.',
          description: 'Final group project',
          project_url: 'http://www.goflat.co.nz/',
          image_url: '/img/goflat.png'}),
        knex('projects').insert({
          id: 2,
          name: 'Great adventure hiking in New Zealand',
          tech: 'Client-side rendering application. React.js.',
          description: 'Personal project',
          project_url: 'https://nz-hiking-adventure.herokuapp.com/',
          image_url: '/img/nz-hiking.png'}),
        knex('projects').insert({
          id: 3,
          name: 'Espiral Dev Academy Blog | Phase 0',
          tech: 'Server-side rendering application. Node.js,  Handlebars.js, Knex.js.',
          description: 'Blog created during pre-bootcamp phase',
          project_url: 'https://eda-blog.herokuapp.com/',
          image_url: '/img/eda-blog.png'}),
        knex('projects').insert({
          id: 4,
          name: 'Map of New Zealand\'s 9 Great Walks',
          tech: 'Front-end application. HTML5, CSS3, Javascript, jQuery.',
          description: 'FIrst project created at the end of the pre-bootcamp phase',
          project_url: 'https://annaulyanova.github.io/nz-great-walks-map',
          image_url: '/img/nz-map.png'})
      ])
    })
}
