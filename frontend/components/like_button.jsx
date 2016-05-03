var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({

  getInitialState: function() {
    return { isLiked: PostStore.isLiked(this.props.postId, currentUserId) };
  },

  removeLike: function(id){
    var like = PostStore.likeId(this.props.postId, currentUserId);
    ClientActions.deleteLike(like);
  },

  changeLike: function(event) {
    event.preventDefault();

    if (this.state.isLiked){

      this.setState({isLiked: false});
      ClientActions.deleteLike(PostStore.likeId(this.props.postId, currentUserId));

    } else {

      this.setState({isLiked: true});

      var likeData = {
        post_id: parseInt(this.props.postId),
        user_id: currentUserId
      }
      ClientActions.createLike(likeData);
    }
  },

  render: function() {
    var buttonText = "Like"
    if (this.state.isLiked){
      buttonText = "Unlike";
    }
    return (
      <div className="like-button">
        <button onClick={this.changeLike}>{buttonText}</button>
      </div>
    );
  }

});