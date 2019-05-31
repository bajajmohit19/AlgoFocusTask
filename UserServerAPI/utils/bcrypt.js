const bcrypt = require('bcrypt');

const encryptOperations = {
    salt:10,
    encryptPassword(password){
        return bcrypt.hashSync(password, this.salt);
    },
    compareHash(password, hashpwd){
            return bcrypt.hashSync(password, hashpwd)
    }
}
module.exports = encryptOperations;