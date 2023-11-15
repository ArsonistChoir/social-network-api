const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280
        },
        createdAt: {
            //Needs Date and getter method for timestamp
        },
        username: {
            type: String,
            required: true
            //Needs to be user that made the thought
        },
        reactions: {
            //Pull array from reactions schema
        }
    },
    {
        // toJSON: {
        //   virtuals: true,
        // },
        // id: false,
      }
  );
  
  const Thoughts = model('thoughts', thoughtsSchema);

  module.exports = Thoughts;