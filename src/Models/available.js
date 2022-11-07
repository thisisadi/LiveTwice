const mongoose = require("mongoose");

const availSchema=new mongoose.Schema({ 
    don_id: {
          type:Number,
          required: true,
          unique:true,
          minlength:3
      },
      organ_name:{
          type:String,
          required:true,
      },
      donor_name:{
          type:String,
      },
      donor_age: {
          type     : Number,
          required : true,
          max:100
        },
      blood_group:{
              type:String,
              required:true
      },
      status:{
          type:String,
          required: true
      },
})

const avail_organ = new mongoose.model("Avail", availSchema);
module.exports = avail_organ;