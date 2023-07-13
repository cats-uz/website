const bcrypt = require('bcrypt')
const passwordGenerator = async (password) => {
    const salt = await bcrypt.genSalt(16)
    const hashed = await bcrypt.hash(password, salt)
    return hashed
}
const passwordChecker = async (originalPassword, currentPassword) => {
    return await bcrypt.compare(currentPassword, originalPassword)
}
module.exports =  {
    passwordGenerator,
    passwordChecker
}