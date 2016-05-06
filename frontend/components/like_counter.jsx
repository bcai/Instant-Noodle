var React = require('react');
var PostStore = require('../stores/post_store.js');

module.exports = React.createClass({

  render: function() {
    var likeText = " likes";
    if (this.props.likeCount === 1){
      likeText = likeText.slice(0,5);
    }

    var likes = this.props.likeCount
    if (this.props.likeCount < 1){
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