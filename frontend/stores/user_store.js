var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var UserStore = new Store(AppDispatcher);

var _user = {};
var _allUsers = {};


var resetUser = function (user) {
  _user = {};
  _user = user;
  UserStore.__emitChange();
};

UserStore.user = function () {
  return _user;
};

var resetAllUsers = function (users) {
  _allUsers = {};
  users.forEach(function(user){
    _allUsers[user.id] = user;
  });
};

UserStore.allUsers = function () {
  return Object.keys(_allUsers).map(function(userId){
    return _allUsers[userId];
  });
};

UserStore.search = function(searchString) {
  if(searchString.length < 1){
    return [];
  }
  var usersArray = UserStore.allUsers();

  return usersArray.filter(function(user){
    var userName = user.username;
    return ((userName.toLowerCase()).indexOf(searchString.toLowerCase()) > -1);
  }).splice(0,5);
};


UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.USER_RECEIVED:
      resetUser(payload.user);
      break;
    case UserConstants.USERS_RECEIVED:
      resetAllUsers(payload.users);
      break;
  }
};


module.exports = UserStore