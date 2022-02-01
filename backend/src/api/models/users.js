const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: "string", required: true },
  password: { type: "string", required: true },
  birth_year: {type: "string", required: true},
  email: { type: "string", required: true },
  phone: { type: "string", required: true },
  highest_degree_of_education: { type: "string", required: true },
  user_type: { type: "string",enum:["student","teacher","admin"],required:true},
  verified: { type: "boolean", default: false },
},
{
    timestamps:true
}
);

module.exports =mongoose.model('User',userSchema,'users');