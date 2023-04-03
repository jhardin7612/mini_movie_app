/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {title: 'Love and Basketball', genre:"romance", release_date: '2000-04-16', imdb_rating: '7.2'},
    {title: 'The Wood', genre:"drama", release_date: '1999-07-16', imdb_rating:'7.0'},
    {title: 'Brown Sugar', genre:"drama", release_date: '2002-10-11', imdb_rating:'6.4'},
    {title: 'Love Jones', genre:"romance", release_date: '1997-03-14', imdb_rating:'7.3'}
  ]);
};
