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
      url: "api/comments",
      data: { comment: { 
        body: data.body,
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
      success: function (comment){
        ServerActions.removeComment(comment);
      }
    });
  },


  // LIKES

  createLike: function (data) {
    $.ajax({
      type: "POST",
      url: "api/likes",
      data: { like: { 
        post_id: data.post_id,
        user_id: data.user_id } },
      success: function (like) {
        ServerActions.receiveLike(like);
      }
    });
  },

  deleteLike: function (id) {
    $.ajax({
      type: "DELETE",
      url: "api/likes/" + id,
      success: function (like) {
        ServerActions.removeLike(like);
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
  },

  // USER DETAIL 

  fetchAllPostsByUser: function(id) {
    $.ajax({
      type: 'GET',
      url: "api/posts",
      data: { user_id: id },
      success: function (posts) {
        ServerActions.receiveAllPostsByUser(posts);
      }
    });
  }
};
