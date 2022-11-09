const { Schema, model } = require('mongoose');
const date = require('..utils/helper.js');
const reactionSchema = require('./reaction')

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date, default: Date.now, get: timeStamp => date(timeStamp)
},
    username: { type: String, required: true },
    reactions: [ reactionSchema ]
}, {toJSON: { virtuals: true, getters: true }});

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;