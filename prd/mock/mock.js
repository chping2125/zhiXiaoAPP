var indexnav = require('./index/indexnav.js');
var indexnew = require('./index/indexnew.js');
var user = require('./my/user.js');
var vali = require('./my/vali.js');
var username = require('./my/username.js');
var password = require('./my/password.js');
var hot = require('./lee/hot.js');
var hotRefresh = require('./lee/refresh.js');
var hotUsers = require('./lee/users.js');
var lxnList = require('./lxn/list.js');
var lxnMoreList = require('./lxn/more.js');
var hotList = require('./lxn/hotList.js');
var iconList = require('./lxn/iconList.js');
module.exports = function() {
    return {
        "indexnav":indexnav,
        "indexnew":indexnew,
        "user": user,
        "vali": vali,
        "username": username,
        "password": password,
        "hot": hot,
        "hotRefresh":hotRefresh,
        "hotUsers":hotUsers,
        "hotList":hotList,
        "list":lxnList,
        "moreList":lxnMoreList,
        "iconList":iconList
    }
}
