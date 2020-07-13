/*const jwt = require('jsonwebtoken')
const JwtSecretKey = "PIJA13OJZx??A"*/

/*
exports.auth = (request, response, next) => {
    const token = request.header('x-auth-token')

    //CHECK IF TOKEN EXISTING
    if (!token) {
        response.status(401).json({msg: "No token, authorization denied"})
    } else {
        try {
            //VERIFY IF THE TOKEN IS VALID
            const decoded = jwt.verify(token, JwtSecretKey)
            //ADD USER FROM PAYLOAD
            request.user = decoded
            next()
        } catch (err) {
            response.status(400).json({msg: "Token is not valid. "+err})
        }
    }
}*/


const jwt = require("jsonwebtoken")
const jwtSecretKey = "kyByAlok"

exports.auth = (request, response, next) => {
    const token = request.header("x-auth-token")
    if(!token) {
        response.status(401).json({msg:"No token. Not Authorized"})
    }
    else {
        try{
            const decoded=jwt.verify(token,jwtSecretKey)
            request.user=decoded
            next()
        }
        catch (err)  {
            response.status(400).json({msg:"Invalid token -> " +err})
        }
    }
}