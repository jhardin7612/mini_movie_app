const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const knex = require('knex')(require ('./knexfile.js')[process.env.NODE_ENV||'development']);
app.use(cors());
app.use(express.json());


//*****Define all API Endpoints with all CRUD FUNCTIONALITY here*****\\

//READ 
app.get('/', (req, res) => res.send(`Express Server Root Page \n 
    Endpoints available: \n
        /movies : shows all movies in database`));

app.get('/movies', (req, res)=> {
    knex.select('*').from('movies')
    .then(data => res.status(200).json(data))
})

//Create
app.post('/movies', (req, res) => {
    knex('movies')
    .insert(req.body)
    .then(data => res.status(201).send("movie has been added")
    .catch(err=> res.status(404).json(err) 
    ))
})

//Delete
app.delete('/movies/:id', (req, res) => {
    knex('movies')
    .where("id",req.params.id)
    .del()
    .then(data => res.status(200).send("movie was deleted"))
    .catch(err=> res.status(404).json(err))
})

//Update
app.patch('/movies/:id', (req, res) => {
    let movieToUpdate = knex('movies').where("id", req.params.id)
    console.log(movieToUpdate);
    knex('movies')
    .where("id", req.params.id)
    .update({
        title: req.body.title,
        genre: req.body.genre,
        release_date: req.body.release_date,
        imdb_rating: req.body.imdb_rating
    })
    .then(data => res.status(200).send("movie was deleted"))
    .catch(err=> res.status(404).json(err))
})

app.listen(port, () => console.log(`Express server is running on port ${port}`));