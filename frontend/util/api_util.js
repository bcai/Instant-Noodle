var ServerActions = require('../actions/server_actions.js');

module.exports = {
  fetchAllPosts: function () {
    $.ajax({
      type: 'GET',
      url: "api/posts",
      success: function (posts) {
        ServerActions.receiveAllPosts(posts);
      }
    });
  },

  fetchPost: function (id) {
    $.ajax({
      type: "GET",
      url: "api/posts/" + id.toString(),
      success: function (post) {
        ServerActions.receivePost(post);
      }
    });
  },

  createPost: function (data) {
    $.ajax({
      type: "POST",
      url: "api/posts",
      data: { post: data },
      success: function (post) {
        ServerActions.receivePost(post);
      }
    });
  },

  updatePost: function (data) {
    $.ajax({
      type: "PATCH",
      url: "api/posts/" + data.id,
      data: { post: { title: data.title, body: data.body } },
      success: function (post) {
        ServerActions.receivePost(post);
      }
    });
  }
};
