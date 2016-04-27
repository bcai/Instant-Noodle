var ApiUtil = require('../util/api_util.js');

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
  },

  destroySession: function() {
    ApiUtil.destroySession();
  }
};
