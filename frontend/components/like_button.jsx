var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({

  getInitialState: function() {
    return { isLiked: PostStore.isLiked(this.props.postId, currentUserId) };
  },

  componentDidMount: function() {
    this.likeButtonListener = PostStore.addListener(this._onChange);
  },

  removeLike: function(id){
    var like = PostStore.likeId(this.props.postId, currentUserId);
    ClientActions.deleteLike(like);
  },

  componentWillUnmount: function() {
    this.likeButtonListener.remove();
  },

  _onChange: function() {
    this.setState({ isLiked: PostStore.isLiked(this.props.postId, currentUserId) });
  },

  changeLike: function(event) {
    event.preventDefault();

    if (this.state.isLiked){
      ClientActions.deleteLike(PostStore.likeId(this.props.postId, currentUserId));
    } else {
      var likeData = {
        post_id: parseInt(this.props.postId),
        user_id: currentUserId
      }
      ClientActions.createLike(likeData);
    }
  },

  render: function() {
    var heart = <img src="/assets/empty_heart.png"/>;
    if (this.state.isLiked){
      heart = <img src="/assets/heart.png"/>;
    }
    return (
      <div>
        <button className="like-button" onClick={this.changeLike}>
          {heart}
        </button>
      </div>
    );
  }

});