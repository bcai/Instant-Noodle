var React = require('react');
var PostStore = require('../stores/postStore.js');
var ClientActions = require('../actions/clientActions.js');

var PostIndexItem = require('./postIndexItem.jsx');
var PostForm = require('./postForm.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return { posts: [] };
  },

  componentDidMount: function () {
    this.postListener = PostStore.addListener(this.getPosts);
    ClientActions.fetchPosts();
  },

  componentWillUnmount: function () {
    this.postListener.remove();
  },

  getPosts: function () {
    this.setState({ posts: PostStore.all() });
  },

  render: function () {
    return (
      <div className="post-index">
        <ul>
          {
            this.state.posts.map(function (post) {
              return (<PostIndexItem key={post.id} post={post} />);
            })
          }
        </ul>
      </div>
    );
  }
});
