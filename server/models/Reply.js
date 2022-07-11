// We built this model so that in future iterations, replies could be added. 

// const { Schema } = require("mongoose");
// const moment = require("moment");

// const replySchema = new Schema(
//   {
//     replyBody: {
//       type: String,
//     },
//     username: {
//       type: String,
//       required: true,
//     },

//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: (createdAtVal) =>
//         moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
//     },
//   },
//   {
//     toJSON: {
//       getters: true,
//     },
//   }
// );

// module.exports = replySchema;
