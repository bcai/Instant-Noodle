var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var UserStore = new Store(AppDispatcher);

var _user = {};


var resetUser = function (user) {
  _user = {};
  _user = user;
  UserStore.__emitChange();
}

UserStore.user = function () {
  return _user;
}


UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.USER_RECEIVED:
      resetUser(payload.user);
      break;
  }
};


module.exports = UserStore