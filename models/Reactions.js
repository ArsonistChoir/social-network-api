const { Schema, Types} = require('mongoose');

const reactionsSchema = new Schema(
    {
        reactionId : {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
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
            type: Date,
            default: Date.now,
            get: (timeDate)=>{
                return timeDate.getMonth()
            }
        }
    },
  );

  module.exports = reactionsSchema;