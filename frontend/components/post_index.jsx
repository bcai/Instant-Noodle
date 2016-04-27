var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');

var PostIndexItem = require('./post_index_item.jsx');
// var PostForm = require('./post_form.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return { posts: [] };
  },

  componentDidMount: function () {
    this.postListener = PostStore.addListener(this.getPostsFromStore);
    ClientActions.fetchPosts();
  },

  componentWillUnmount: function () {
    this.postListener.remove();
  },

  getPostsFromStore: function () {
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
