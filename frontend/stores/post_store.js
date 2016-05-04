var Store = require('flux/utils').Store;
var PostConstants = require('../constants/post_constants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var PostStore = new Store(AppDispatcher);

var _posts = {};





// POSTS

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

PostStore.all = function () {
  return Object.keys(_posts).map(function (postId) {
    return _posts[postId];
  });
};

PostStore.find = function (id) {
  return _posts[id];
};


// COMMENTS

var setComment = function (comment) {
  _posts[comment.post_id].comments.push(comment);
  PostStore.__emitChange();
};

var removeComment = function (comment) {
  var currentPostComments = _posts[comment.post_id].comments;
  var commentIndex = currentPostComments.findIndex(function(storeComment){
    return (storeComment.id == comment.id);
  });
  currentPostComments.splice(commentIndex,1);
  PostStore.__emitChange();
};

PostStore.comments = function (id){
  return _posts[id].comments;
};


// LIKES

var setLike = function (like) {
  _posts[like.post_id].likes.push(like);
  PostStore.__emitChange();
};

var removeLike = function (like) {
  var currentPostLikes = _posts[like.post_id].likes;
  var likeIndex = currentPostLikes.findIndex(function(storeLike){
    return (storeLike.id == like.id);
  });
  currentPostLikes.splice(likeIndex,1);
  PostStore.__emitChange();
};

PostStore.likeId = function (post_id, user_id){
  var likeIndex = _posts[post_id].likes.findIndex(function(storeLike){
    return ((storeLike.post_id == post_id) && (storeLike.user_id == user_id));
  })

  return _posts[post_id].likes[likeIndex].id;
};

PostStore.likeCount = function (id){
  return _posts[id].likes.length;
};

PostStore.isLiked = function(post_id, user_id){
  return _posts[post_id].likes.some(function(like) {
    return like.user_id == user_id;
  });
};

// USER DETAIL

var resetUserPosts = function (posts) {
  _posts = {};

  posts.forEach(function (post) {
    _posts[post.id] = post;
  });
  PostStore.__emitChange(); 
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
    case PostConstants.COMMENT_REMOVED:
      removeComment(payload.comment);
      break;
    case PostConstants.LIKE_RECEIVED:
      setLike(payload.like);
      break;
    case PostConstants.LIKE_REMOVED:
      removeLike(payload.like);
      break;
    case PostConstants.USER_POSTS_RECEIVED:
      resetUserPosts(payload.posts);
      break;
  }
};

module.exports = PostStore;
