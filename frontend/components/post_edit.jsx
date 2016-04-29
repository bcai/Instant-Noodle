var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');
var Link = require('react-router').Link;
var HashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  getInitialState: function () {
    var potentialPost = PostStore.find(this.props.postId);
    var post = potentialPost ? potentialPost : {};
    console.log("post: " + post);
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

  imageUrlChange: function (event) {
    this.setState({ imageUrl: event.target.value });
  },

  descriptionChange: function (event) {
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
      image_url: this.state.image_url,
      description: this.state.description,
      id: parseInt(this.props.postId)
    };
    ClientActions.updatePost(postData);
    this.props.callback();
  },


  render: function () {
    return (
      <div className="modal-form-wrapper">
        <h3>Edit Post</h3>
        <form id="post-form" onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.descriptionChange}
            value={this.state.description} />

          <br /><br />

          <input className="submit-button" 
                 type="submit" 
                 value="Save Changes"/>
        </form>

      </div>
     );
  }
});
