var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');

var CommentIndexItem = require('./comment_index_item.jsx');
var CommentForm = require('./comment_form.jsx');


module.exports = React.createClass({
  getInitialState: function(){
    return {comments: PostStore.comments(this.props.postId)};
  },

  _onChange: function() {
    this.setState({comments: PostStore.comments(this.props.postId)});
  },

  componentDidMount: function() {
    this.commentListener = PostStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.commentListener.remove();
  },

  render: function() {
    var comments = this.state.comments.map(function (comment) {
      return (<CommentIndexItem key={comment.id} comment={comment}/>);
    });

    return (
      <div id="comment-index-container">
        <ul className="comment-index">
          {comments}
        </ul>
      </div>
    );
  }
});
