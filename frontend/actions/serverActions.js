var AppDispatcher = require('../dispatcher/dispatcher.js');
var PostConstants = require('../constants/postConstants.js');

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
};
