const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // String 사이의 공백을 없애주는 역할.
    unique: 1,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  password: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre("save", function (next) {
  var user = this;
  
  //user == userSchema

  if (user.isModified("password")) {
    //model 속 field 안에 'password'가 바뀔때만.
    //비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      //next 하면 index.js user.save function으로 바로 넘어간다.
      bcrypt.hash(user.password, salt, function (err, hash) {
        //hash == 암호화된 비밀번호
        //user.password ==> plainPassword
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
