var React = require('react');
var ClientActions = require('../actions/client_actions.js');
var Link = require('react-router').Link;

module.exports = React.createClass({

  removeComment: function(){
    var comment = this.props.comment;
    ClientActions.deleteComment(comment.id);
  },

  render: function() {
    var comment = this.props.comment;
    if (comment.user.id === currentUserId){
      var deleteButton = (<button className="deletable" onClick={this.removeComment}>X</button>);
    } else {
      var deleteButton = "";
    }

    return (
      <li className="comment">
        <p>
          <span id="comment-author">
            <Link to={"/users/" + comment.user.id}>{comment.user.username}</Link>
          </span>
          {comment.body}
          {deleteButton}
        </p>
      </li>
    );
  }

});