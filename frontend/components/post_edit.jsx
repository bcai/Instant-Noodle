var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');
var UploadButton = require('./upload_button');


module.exports = React.createClass({
  getInitialState: function () {
    var potentialPost = PostStore.find(this.props.postId);
    var post = potentialPost ? potentialPost : {};
    return ({ description: post.description, 
              imageUrl: post.image_url, });
  },

  componentDidMount: function () {
    this.postListener = PostStore.addListener(this.handleChange);
    ClientActions.fetchPost(parseInt(this.props.postId));
  },

  componentWillUnmount: function () {
    this.postListener.remove();
  },

  changeImage: function (url) {
    this.setState({ imageUrl: url });
  },

  changeDescription: function (event) {
    this.setState({ description: event.target.value });
  },

  handleChange: function () {
    var potentialPost = PostStore.find(this.props.postId);
    var post = potentialPost ? potentialPost : {};
    this.setState({ imageUrl: post.image_url, 
                    description: post.description });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var postData = {
      image_url: this.state.imageUrl,
      description: this.state.description,
      id: parseInt(this.props.postId),
    };
    ClientActions.updatePost(postData);
    this.props.callback();
  },


  render: function () {
    return (
      <div className="modal-form-wrapper">
        <h3>Edit Post</h3>
        <form className="post-form" onSubmit={this.handleSubmit}>

          <UploadButton addImage={this.changeImage}/>

          <textarea
            onChange={this.changeDescription}
            value={this.state.description}
            placeholder="Add a description"/>

          <br/><br/>

          <input className="submit-button" 
                 type="submit" 
                 value="Save Changes"/>
        </form>

      </div>
     );
  }
});
