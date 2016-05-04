var React = require('react');
var PostStore = require('../stores/post_store.js');

module.exports = React.createClass({
  getInitialState: function(){
    return {likes: PostStore.likeCount(this.props.postId)};
  },

  _onChange: function() {
    this.setState({likes: PostStore.likeCount(this.props.postId)});
  },

  componentDidMount: function() {
    this.likeListener = PostStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.likeListener.remove();
  },

  render: function() {
    var likeText = " likes";
    if (this.state.likes === 1){
      likeText = likeText.slice(0,5);
    }

    var likes = this.state.likes
    if (this.state.likes < 1){
      likes = "Be the first to like this.";
    } else {
      likes = likes + likeText;
    }

    return (
      <div className="like-counter-wrapper">
        <span>{likes}</span>
      </div>
    );
  }
});