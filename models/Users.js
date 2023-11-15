const { Schema, model } = require('mongoose');

const usersSchema = new Schema(
    {
        username : {
            type: String,
            required: true,
            //Need Unique and Trimmed
        },
        email : {
            type: String,
            required: true,
            //Need Unique and validate email
        },
        thoughts : {
            //array of _id referencing thoughts
        },
        friends : {
            //array of _id referencing friends
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