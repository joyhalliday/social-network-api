const { Schema, Types } = require('mongoose');
const date = require('../utils/helper');
const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId()},
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, get: timeStamp => date(timeStamp)
    }
}, {toJSON: { getters: true }, _id: false });

module.exports = reactionSchema;