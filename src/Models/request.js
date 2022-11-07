const mongoose = require("mongoose");

const requestSchema=new mongoose.Schema({ 
    req_id: {
          type:Number,
          required: true,
          unique:true,
          minlength:3
      },
      organ_type:{
          type:String,
          required:true,
      },
      prescription:{
          type:String,
          required:true,
      },
})

const request_organ = new mongoose.model("User", requestSchema);
module.exports = request_organ;