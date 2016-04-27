var ApiUtil = require('../util/apiUtil.js');

module.exports = {
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
  }
};
