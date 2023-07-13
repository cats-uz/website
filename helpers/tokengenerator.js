const jwt = require('jsonwebtoken')
const tokenGenerator = (username) => {
    try{
        return jwt.sign({username}, process.env.SECRET)
    } catch(ex){
        throw ex
    }
}
module.exports = {
    tokenGenerator
}