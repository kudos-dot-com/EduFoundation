const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const userSchema = new Schema({
  username: { type: "string", required: true },
  email: { type: "string", required: true },
  phone: { type: "string", required: true },
  highest_degree_of_education: { type: "string", required: true },
  user_type: { type: "string" },
  verified: { type: "boolean", default: false }
},
{
    timestamps:true
}
);

module.exports =mongoose.model('User',userSchema,'users');