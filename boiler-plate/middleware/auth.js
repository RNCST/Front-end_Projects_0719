const { User } = require('../models/User')

let auth = (req, res, next) => {

    // 인증 처리 

    // Client Cookie에서 Token을 가져온다. 
    let token = req.cookies.login_auth;
    // toekn을 복호화 한 후 유저를 찾는다. 
    User.findByToken(token, (err, user) => {
            
    // 유저가 있으면 인증 성공

    // 유저가 없으면 인증 실패.
       if(err) throw err;
       if(!user) return res.json({ isAuth: false, error: true}) 

       req.token = token;
       req.user  = user;
       next();
    })



}


module.exports = { auth };