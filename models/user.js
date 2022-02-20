const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
    idade: {
      type: Number,
    },
    doenca: {
      type: String,
    },
    alergia: {
      type: String,
    },
    sangue: {
      type: String,
    },
    nif: {
      type: String,
    },
    covid: {
      type: String,
    },
    vacinacao: {
      type: String,
    },
    dose: {
      type: Number,
    },
  },

  { timestamps: true }
);

userSchema.methods = {
  authenticate: function (plainText) {
    return this.password === plainText;
  },
};
module.exports = mongoose.model("User", userSchema);
