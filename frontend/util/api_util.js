var ServerActions = require('../actions/server_actions.js');

module.exports = {
  fetchAllPosts: function () {
    $.ajax({
      url: "api/posts",
      success: function (posts) {
        ServerActions.receiveAllPosts(posts);
      }
    });
  },

  fetchPost: function (id) {
    $.ajax({
      url: "api/posts/" + id.toString(),
      success: function (post) {
        ServerActions.receivePost(post);
      }
    });
  },

  createPost: function (data) {
    $.ajax({
      url: "api/posts",
      type: "POST",
      data: { post: data },
      success: function (post) {
        ServerActions.receivePost(post);
      }
    });
  },

  updatePost: function (data) {
    $.ajax({
      url: "api/posts/" + data.id,
      type: "PATCH",
      data: { post: { title: data.title, body: data.body } },
      success: function (post) {
        ServerActions.receivePost(post);
      }
    });
  }
};
