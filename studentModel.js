var mongoose = require("mongoose");

var studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  faculty: String,
  matric: String,
  create_date: {
    type: Date,
    default: Date.now,
  },
});

var Student = (module.exports = mongoose.model("student", studentSchema));
module.exports.get = function (callback, limit) {
  Student.find(callback).limit(limit);
};
