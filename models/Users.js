const { Schema, model } = require('mongoose');

const usersSchema = new Schema(
    {
        username : {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email : {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts : [
            {type: Schema.Types.ObjectId,
            ref: "thoughts"
            }
        ],
        friends : [
            {type: Schema.Types.ObjectId,
                ref: "users"
                }
            ]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
  );
  
    usersSchema
      .virtual('friendCount')
      .get(function () {
        return this.friends.length
      })

  const Users = model('users', usersSchema);

  module.exports = Users;