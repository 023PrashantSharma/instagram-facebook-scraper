var mongoose = require('mongoose');
/**
 * Service Schema
 */
var Users = new mongoose.Schema({
  unique_token: {
    type: String,
    trim: true,
    default:'',
    index:{
      unique:true
    }
  },
  username: {
    type: String,
    trim: true,
    default:''
  },
  email: {
    type: String,
    trim: true,
    default:''
  },
  mobile: {
    type: String,
    trim: true,
    default:'',
    index:{
      unique:true
    }
  },
  password: {
    type: String,
    trim: true,
    default:''
  },
  status: {
    type: Number,
    default:1
  }
},
   {
       timestamps:true
   }
  );

module.exports = mongoose.model("Users", Users);

