const { Schema, model } = require('mongoose');
const reactions = require('./Reactions')

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timeDate)=>{
                return timeDate.getMonth()
            }
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            reactions
        ]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
  );
  
      thoughtsSchema
       .virtual('reactionCount')
       .get(function () {
        return this.reactions.length
       })

  const Thoughts = model('thoughts', thoughtsSchema);

  module.exports = Thoughts;