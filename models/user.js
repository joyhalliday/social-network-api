const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    thoughts: {}
});

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

User.create(
    {
        // username
        // email
        // thoughts
        // friends
    }
)