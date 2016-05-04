var ApiUtil = require('../util/api_util.js');

module.exports = {

  // POSTS

  fetchAllPosts: function () {
    ApiUtil.fetchAllPosts();
  },

  fetchPost: function (id) {
    ApiUtil.fetchPost(id);
  },

  createPost: function (data) {
    ApiUtil.createPost(data);
  },

  updatePost: function (data) {
    ApiUtil.updatePost(data);
  },


  // COMMENTS

  createComment: function (data) {
    ApiUtil.createComment(data);
  },

  deleteComment: function (id) {
    ApiUtil.deleteComment(id);
  },
  

  // LIKES

  createLike: function (data) {
    ApiUtil.createLike(data);
  },

  deleteLike: function (id) {
    ApiUtil.deleteLike(id);
  },


  // LOGOUT

  destroySession: function() {
    ApiUtil.destroySession();
  },

  // USER DETAIL

  fetchAllPostsByUser: function(id) {
    ApiUtil.fetchAllPostsbyUser(id);
  }
};
