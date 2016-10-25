var user = require('./my/user.js');
var vali = require('./my/vali.js');
var username = require('./my/username.js');
var lxnList = require('./lxn/list.js');
var lxnMoreList = require('./lxn/more.js');
var hotList = require('./lxn/hotList.js');
var iconList = require('./lxn/iconList.js');
module.exports = function() {
    return {
        "user": user,
        "vali": vali,
        "username":username,
        "hotList":hotList,
        "list":lxnList,
        "moreList":lxnMoreList,
        "iconList":iconList
    }
}
