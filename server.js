const express = require('express');
const db = require('./config/connection');

const { User } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/user', (req, res) => {
    User.find({}, (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Internal Server Error' });
        } else {
            res.status(200).json(result);
        }
    });
});

app.get('/user/:id', (req, res) => {

})

app.post('/user', (req, res) => {

})

app.put('/user/:id', (req, res) => {

})

app.delete('/user/:id', (req, res) => {

})

app.post('/users/:userId/friends/:friendId', (req, res) => {

})

app.delete('/users/:userId/friends/:friendId', (req, res) => {

})

app.get('/thoughts', (req, res) => {

})

app.get('/thoughts/:id', (req, res) => {

})

app.post('/thoughts/:id', (req, res) => {

})

app.put('/thoughts/:id', (req, res) => {

})

app.delete('/thoughts/:id', (req, res) => {

})

app.post('/thoughts/:thoughtId/reactions', (req, res) => {

})

app.delete('/thoughts/:thoughtId/reactions', (req, res) => {
    
})

db.once('open', () => {
    app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    });
});