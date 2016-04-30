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
      <div className="modal-form-wrapper">
        <h3>New Post</h3>
        <form className="post-form" onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.descriptionChange} 
            value={this.state.description}
            placeholder="Add a description" />

          <br /><br />

          <input className="submit-button" 
                 type="submit" 
                 value="Create Post" />
        </form>
      </div>
    );
  }
});
