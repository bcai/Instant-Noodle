var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  getInitialState: function () {
    var potentialPost = PostStore.find(this.props.params.postId);
    var post = potentialPost ? potentialPost : {};
    return ({ description: post.description, 
              imageUrl: post.image_url, });
  },

  componentDidMount: function () {
    this.postListener = PostStore.addListener(this.handleChange);
    ClientActions.getPost(parseInt(this.props.params.postId));
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
    var potentialPost = PostStore.find(this.props.params.postId);
    var post = potentialPost ? potentialPost : {};
    this.setState({ imageUrl: post.image_url, 
                    description: post.description });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var postData = {
      image_url: this.state.image_url,
      description: this.state.description,
      id: parseInt(this.props.params.postId)
    };
    ClientActions.editPost(postData);
    hashHistory.push("/");
  },


  render: function () {
    return (
      <div>
        <form id="post-form" onSubmit={this.handleSubmit}>
          <input
            type="image"
            onChange={this.imageUrlChange}
            src={this.state.image_url} />

          <br /><br />
          <textarea
            onChange={this.descriptionChange}
            value={this.state.description} />

          <br /><br />

          <input type="submit" value="Save Changes"/>
        </form>

        <Link to="/">Back to Index</Link>
      </div>
     );
  }
});
