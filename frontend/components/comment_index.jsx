var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');

var CommentIndexItem = require('./comment_index_item.jsx');
var CommentForm = require('./comment_form.jsx');


module.exports = React.createClass({

  render: function() {
    var comments = this.props.comments.map(function (comment) {
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
