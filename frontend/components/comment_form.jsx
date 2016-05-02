var React = require('react');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({

  getInitialState: function() {
    return ({ body: "" });
  },

  addBody: function (event) {
    var newBody = event.target.value;
    this.setState({ body: newBody });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var commentData = {
      body: this.state.body,
      post_id: this.props.postId,
      user_id: currentUserId
    };
    ClientActions.createComment(commentData);
    this.setState({body: ""});
  },

  render: function() {
    return (
      <div className="comment-form-wrapper">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text"
                 onChange={this.addBody}
                 value={this.state.body}
                 placeholder="Add a comment..." />
        </form>
      </div>
    );
  }
});
