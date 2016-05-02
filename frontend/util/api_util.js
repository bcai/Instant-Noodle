var ServerActions = require('../actions/server_actions.js');

module.exports = {

  // POSTS

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
      data: { post: { image_url: data.image_url, 
                      description: data.description } },
      success: function (post) {
        ServerActions.receivePost(post);
      }
    });
  },


  // COMMENTS

  createComment: function (data) {
    $.ajax({
      type: "POST",
      url: "api/comments/" + data.id,
      data: { comment: { body: data.body,
                         post_id: data.post_id,
                         user_id: data.user_id } },
      success: function (comment) {
        ServerActions.receiveComment(comment);
      }
    });
  },

  deleteComment: function (id) {
    $.ajax({
      type: "DELETE",
      url: "api/comments/" + id,
      success: function(comment){
        ServerActions.deleteComment(comment);
      }
    });
  },


  // LOGOUT

  destroySession: function(){
    $.ajax({
      type: "DELETE",
      url: "/session",
      success:
        location = '/session/new'
    });
  }
};
