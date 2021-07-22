// back-end의 시작점. 

const express =require(`express`)
const app = express()
const bodyParser = require('body-parser')
const { User } = require("./models/User");
const cookieParser = require('cookie-parser');
const config = require("./config/key");
const { auth } = require("./middleware/auth");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopoLogy: true, useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected....'))
  .catch(err => console.log(err))


app.get('/', (req,res) => res.send('Hello World!'))

app.get('/api/hello', (req,res) => {

  res.send("Hello")
})

app.post('/api/users/register', (req, res) => {
  //회원 가입할 떄 필요한 정보들을 client에서 가져오면
  //그것들을 DB에 넣어준다.
    const user = new User(req.body)

    user.save((err, userInfo) => {
      if(err) return res.json({ success: false, err})
      return res.status(200).json({
        success:true
    })
  })
})

app.post("/api/users/login", (req, res) => {
  //요청된 값들을 DB에 있는지 찾는다.
  //Email이 unique 하기 떄문에 Email을 먼저 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "가입된 이메일이 없습니다.",
      });
      //Email이 존재하면 비밀번호가 맞는 비밀번호인지 확인
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      //비밀번호가 맞다면 Token 생성.
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        //토큰을 저장한다. 저장할 수 있는 곳은 많다.. 쿠키, 로컬스토리지
        res.cookie("login_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

app.get('/api/users/auth', auth , (req, res) => {
  //auth => middleware => request를 받은후 callback function으로 가기전에 무언가를해줌
  
  //이부분 이 실행이 된다는 것은 middleware인 auth 가 true라는 것. 
  res.status(200).json({
    _id: req.user_id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email : req.user.email,
    name : req.user.name,
    lastname : req.user.lastname,
    role : req.user.role,
    image: req.user.image
  })
})


app.get('/api/users/logout', auth, (req, res)  => {

  //로그아웃 하려는 유저를 userdb에서 찾는다.
  User.findOneAndDelete({ _id: req.user._id },
    {token: ""}
    , (err, user) => {
      if(err) return res.json({ success:false, err});
      return res.status(200).send({
        success: true
      })
    })
})



const port = 5000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))