var AppDispatcher = require('../dispatcher/dispatcher.js');
var PostConstants = require('../constants/post_constants.js');
var UserConstants = require('../constants/user_constants.js');

module.exports = {

  // POSTS

  receiveAllPosts: function (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receivePost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
    });
  },
  

  // COMMENTS

  receiveComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: PostConstants.COMMENT_RECEIVED,
      comment: comment
    });
  },

  removeComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: PostConstants.COMMENT_REMOVED,
      comment: comment
    })
  },


  // LIKES

  receiveLike: function (like) {
    AppDispatcher.dispatch({
      actionType: PostConstants.LIKE_RECEIVED,
      like: like
    });
  },

  removeLike: function (like) {
    AppDispatcher.dispatch({
      actionType: PostConstants.LIKE_REMOVED,
      like: like
    })
  },


  // USER DETAIL

  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    })
  },

  // USER SEARCH

  receiveAllUsers: function (users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    })
  }
};
