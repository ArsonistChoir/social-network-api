const { Schema, model } = require('mongoose');

const reactionsSchema = new Schema(
    {
        reactionId : {
            //Needs Mongoose Id and set value to new Id
        },
        reactionBody : {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280
        },
        username : {
            type: String,
            required: true
        },
        createdAt : {
            //Needs Date, default value, and getter
        }
    },
    {
        // toJSON: {
        //   virtuals: true,
        // },
        // id: false,
      }
  );
  
  const Users = model('users', usersSchema);

  module.exports = Users;