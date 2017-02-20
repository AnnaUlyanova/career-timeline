
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          id: 1,
          name: 'goFLat',
          tech: 'React, Redux, Webpack, Axios, Node.js, Express server, SQLite3, Knex.js, PostgreSQL.',
          description: 'Final group project, summary of the skills learned during the bootcamp.',
          project_url: 'http://www.goflat.co.nz/',
          image_url: '/img/goflat1.png',
          git: 'https://github.com/AnnaUlyanova/flatme'}),
        knex('projects').insert({
          id: 2,
          name: 'New Zealand Great Adventure Hiking',
          tech: 'React, Webpack, Superagent, Node.js, Express server, Hanldebars.js, SQLite3, Knex.js, PostgreSQL, Google Maps API.',
          description: 'Personal project with client-side and server-side rendering. You can check map of NZ\'s 9 great walks, activities on the particular walk, suggestions what to pack, see current alerts, add notes.',
          project_url: 'https://nz-hiking-adventure.herokuapp.com/',
          image_url: '/img/nz-hiking1.png',
          git: 'https://github.com/AnnaUlyanova/nz-hiking'}),
        knex('projects').insert({
          id: 3,
          name: 'Enspiral Dev Academy Blog | Phase 0',
          tech: 'Node.js, Express server, Hanldebars.js, SQLite3, Knex.js, PostgreSQL.',
          description: 'Server-side rendering application. Blog created during 9 weeks of the pre-bootcamp phase.',
          project_url: 'https://eda-blog.herokuapp.com/',
          image_url: '/img/eda-blog1.png',
          git: 'https://github.com/AnnaUlyanova/eda-phase0-blog'}),
        knex('projects').insert({
          id: 4,
          name: 'Map of New Zealand\'s 9 Great Walks',
          tech: 'HTML5, CSS3, Javascript, jQuery.',
          description: 'Front-end application. First project created at the end of the pre-bootcamp phase.',
          project_url: 'https://annaulyanova.github.io/nz-great-walks-map',
          image_url: '/img/nz-map1.png',
          git: 'https://github.com/AnnaUlyanova/nz-great-walks-map'})
      ])
    })
}
