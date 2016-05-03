var Store = require('flux/utils').Store;
var PostConstants = require('../constants/post_constants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var PostStore = new Store(AppDispatcher);

var _posts = {};

var resetPosts = function (posts) {
  _posts = {};

  posts.forEach(function (post) {
    _posts[post.id] = post;
  });
  PostStore.__emitChange();
};

var setPost = function (post) {
  _posts[post.id] = post;
  PostStore.__emitChange();
};

var setComment = function (comment) {
  _posts[comment.post_id].comments.push(comment);
  PostStore.__emitChange();
};

var deleteComment = function (comment) {
  var currentPostComments = _posts[comment.post_id].comments;
  var commentIndex = currentPostComments.findIndex(function(c){
    return (c.id == comment.id);
  });
  currentPostComments.splice(commentIndex,1);
  PostStore.__emitChange();
};

PostStore.comments = function(id){
  return _posts[id].comments;
};

PostStore.all = function () {
  return Object.keys(_posts).map(function (postId) {
    return _posts[postId];
  });
};

PostStore.find = function (id) {
  return _posts[id];
};


PostStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PostConstants.POSTS_RECEIVED:
      resetPosts(payload.posts);
      break;
    case PostConstants.POST_RECEIVED:
      setPost(payload.post);
      break;
    case PostConstants.COMMENT_RECEIVED:
      setComment(payload.comment);
      break;
    case PostConstants.COMMENT_DELETED:
      deleteComment(payload.comment);
      break;
  }
};

module.exports = PostStore;
