var user = require('./my/user.js');
var vali = require('./my/vali.js');
var username = require('./my/username.js');

module.exports = function() {
    return {
        "user": user,
        "vali": vali,
        "username":username
    }
}
