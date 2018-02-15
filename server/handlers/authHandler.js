let auth ={};
auth.islogged = function(req, res, next){
    const token = req.headers.token;
    if (token) {
        if(token == config.superToken){
            next();
        }else{
            res.status('401').json({ message: 'Wrong token!'  });
        }
    }else{
        res.status('401').json({ message: 'No token provided!'  });
    }
};
module.exports = auth;
