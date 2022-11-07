const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    }, Age: {
        type: Number,
        required: true
    }, BloodGroup: {
        type: String,
        required: true
    }, Email: {
        type: String,
        required: true
    }, Password: {
        type: String,
        required: true
    },
})

const User = new mongoose.model("User", userSchema);
module.exports = User;