var React = require('react');
var ClientActions = require('../actions/client_actions.js');
var UploadButton = require('./upload_button');

module.exports = React.createClass({
  getInitialState: function () {
    return ({ imageUrl: "", description: "", uploadStatus: ""  });
  },

  addImage: function (url, filename) {
    this.setState({ imageUrl: url, uploadStatus: "Image successfully added!" });
  },

  addDescription: function (event) {
    var newDescription = event.target.value;
    this.setState({ description: newDescription });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var postData = {
      description: this.state.description,
      image_url: this.state.imageUrl,
      author_id: currentUserId
    };
    ClientActions.createPost(postData);
    this.setState({ imageUrl: "", description: ""});
    this.props.callback();
  },

  render: function () {
    return (
      <div className="modal-form-wrapper">
        <h3>New Post</h3>
        <form className="post-form" onSubmit={this.handleSubmit}>

          <p>{this.state.uploadStatus}</p>
          <UploadButton addImage={this.addImage}/>

          <textarea
            onChange={this.addDescription} 
            value={this.state.description}
            placeholder="Add a description"/>

          <input className="submit-button" 
                 type="submit" 
                 value="Create Post"/>
        </form>
      </div>
    );
  }
});
