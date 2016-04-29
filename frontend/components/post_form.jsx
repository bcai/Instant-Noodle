var React = require('react');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({
  getInitialState: function () {
    return ({ description: "" });
  },

  descriptionChange: function (event) {
    var newDescription = event.target.value;
    this.setState({ description: newDescription });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var postData = {
      description: this.state.description
    };
    ClientActions.createPost(postData);
    this.setState({ description: "" });
  },

  render: function () {
    return (
      <div>
        <h3>New Post</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.description}
            onChange={this.descriptionChange} />

          <br /><br />

          <input className="submit-button" type="submit" value="Create Post" />
        </form>
      </div>
    );
  }
});
