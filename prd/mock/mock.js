var user = require('./my/user.js');
var vali = require('./my/vali.js');
var username = require('./my/username.js');
var password = require('./my/password.js');
var hot = require('./lee/hot.js');
var hotRefresh = require('./lee/refresh.js');
var hotUsers = require('./lee/users.js');

module.exports = function() {
    return {
        "user": user,
        "vali": vali,
        "username": username,
        "password": password
        "username":username,
        "hot": hot,
        "hotRefresh":hotRefresh,
        "hotUsers":hotUsers
    }
}
