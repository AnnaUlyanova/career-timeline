
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('career-steps').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('career-steps').insert({
          id: 1,
          title: 'Moscow Power Engineering Institute (Technical University)',
          dates:'September 2006 – June 2012',
          description:'Qualification of Engineer with the Specialty in Information Systems and Rechnology'}),
          knex('career-steps').insert({
            id: 2,
            title: 'Croc Incorporated',
            dates:'January 2011 – February 2013',
            description:'Service Delivery Coordinator',
            type:'work'}),
          knex('career-steps').insert({
            id: 3,
            title: 'Auckland University of Technology',
            dates:'February 2013 – December 2013',
            description:'Master of service-oriented computing'}),
          knex('career-steps').insert({
            id: 4,
            title: 'Medtech Global',
            dates:'March 2014 – December 2014',
            description:'Operations Coordinator',
            type:'work'}),
          knex('career-steps').insert({
            id: 5,
            title: 'Exeed Ltd',
            dates:'April 2015 – October 2016',
            description:'Sales Support and Operations',
            type:'work'}),
          knex('career-steps').insert({
            id: 6,
            title: 'Enspiral Dev Academy',
            dates:'October 2016 – February 2017',
            description:'Web Development Programme'})
      ]);
    });
};
