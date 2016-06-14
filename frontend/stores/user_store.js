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


// SEARCH

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


// FOLLOWS

var setFollow = function (follow) {
  _user.followers.push(follow);
  UserStore.__emitChange();
};

var removeFollow = function (follow) {
  var followers = _user.followers;
  var followIndex = followers.findIndex(function(storeFollow){
    return (storeFollow.id == follow.id);
  });
  followers.splice(followIndex,1);
  UserStore.__emitChange();
};

UserStore.followId = function (userDetailId, currentId){
  var followIndex = _user.followers.findIndex(function(storeFollow){
    return ((storeFollow.user_id == userDetailId) && (storeFollow.follower_id == currentId));
  })

  return _user.followers[followIndex].id;
};

UserStore.isFollowed = function(userDetailId, currentId){
  if (!_user.followers)
    return false;

  return _user.followers.some(function(follow) {
    return (follow.user_id == userDetailId && follow.follower_id == currentId);
  });
};



UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.USER_RECEIVED:
      resetUser(payload.user);
      break;
    case UserConstants.USERS_RECEIVED:
      resetAllUsers(payload.users);
      break;
    case UserConstants.FOLLOW_RECEIVED:
      setFollow(payload.follow);
      break;
    case UserConstants.FOLLOW_REMOVED:
      removeFollow(payload.follow);
      break;
  }
};


module.exports = UserStore