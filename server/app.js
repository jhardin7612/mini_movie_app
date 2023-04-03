const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const knex = require('knex')(require ('./knexfile.js')[process.env.NODE_ENV||'development']);
app.use(cors());
app.use(express.json());


//Define all API Endpoints here
app.get('/', (req, res) => res.send(`Express Server Root Page \n 
    Endpoints available: \n
        /movies : shows all movies in database`));

app.get('/movies', (req, res)=> {
    knex.select('*').from('movies')
    .then(data => res.status(200).json(data))
})

//Create or Post
app.post('/movies', (req, res) => {
    knex('movies')
    .insert(req.body)
    .then(data => res.status(201).send("movie has been added")
    .catch(err=> res.status(404).json(err) 
    ))
})

//Delete
app.delete('/movies/:id', (req, res) => {
    let movieToDel = req.params.id;
    console.log(movieToDel);
    knex('movies')
    .where("id",movieToDel)
    .del()
    .then(data => res.status(200).send("movie was deleted"))
    .catch(err=> res.status(404).json(err))
})

app.listen(port, () => console.log(`Express server is running on port ${port} `));