var React = require('react');
var ClientActions = require('../actions/client_actions.js');
var UploadButton = require('./upload_button');

module.exports = React.createClass({
  getInitialState: function () {
    return ({ image_url: "", description: "" });
  },

  addImage: function (url) {
    this.setState({ image_url: url });
  },

  addDescription: function (event) {
    var newDescription = event.target.value;
    this.setState({ description: newDescription });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var postData = {
      description: this.state.description,
      image_url: this.state.image_url,
      author_id: currentUserId
    };
    ClientActions.createPost(postData);
    this.setState({ image_url: "", description: ""});
    this.props.callback();
  },

  render: function () {
    return (
      <div className="modal-form-wrapper">
        <h3>New Post</h3>
        <form className="post-form" onSubmit={this.handleSubmit}>

          <UploadButton addImage={this.addImage}/>

          <textarea
            onChange={this.addDescription} 
            value={this.state.description}
            placeholder="Add a description"/>

          <br/><br/>

          <input className="submit-button" 
                 type="submit" 
                 value="Create Post"/>
        </form>
      </div>
    );
  }
});
