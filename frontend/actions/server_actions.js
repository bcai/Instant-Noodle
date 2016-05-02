var AppDispatcher = require('../dispatcher/dispatcher.js');
var PostConstants = require('../constants/post_constants.js');

module.exports = {
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

  receiveComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: PostConstants.COMMENT_RECEIVED,
      comment: comment
    });
  },

  deleteComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: PostConstants.COMMENT_DELETED,
      comment: comment
    })
  }
};
