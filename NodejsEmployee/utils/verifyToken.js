const jwt = require("jsonwebtoken")
const {createError} = require("./error.js")

const verifyToken = (req,res,next)=>{
    //console.log( req.cookies.access_token)
    const token = req.cookies.access_token;
    
    if(!token){
        return next(createError(401, "You are not authenticated"))
    }

    jwt.verify(token, process.env.JWT, (err, user)=>{
        if(err)  return next(createError(403, "Token is not valid!"))
        req.user = user;
        next()
    })
}

const verifyUser = (req,res,next)=>{
    //console.log(req.cookies)
    verifyToken(req,res, next, ()=>{
        if(req.user.id === req.params.id){
            next()
        }else{
             return next(createError(403, "You are not authorized!"))
        }
    })

}

module.exports = {verifyToken, verifyUser}