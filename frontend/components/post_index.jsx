var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');

var PostIndexItem = require('./post_index_item.jsx');
var PostForm = require('./post_form.jsx');
var Modal = require('react-modal');

module.exports = React.createClass({
  getInitialState: function () {
    return { posts: [], showForm: false };
  },

  componentWillMount: function(){
    Modal.setAppElement("body");
  },

  componentDidMount: function () {
    this.postListener = PostStore.addListener(this.getPostsFromStore);
    ClientActions.fetchAllPosts();
  },

  componentWillUnmount: function () {
    this.postListener.remove();
  },

  getPostsFromStore: function () {
    this.setState({ posts: PostStore.all() });
  },

  createPost: function (event) {
    this.setState({showForm: true});
  },

  closeModal: function() {
    this.setState({showForm: false});
  },

  render: function () {
    var posts =  this.state.posts.map(function (post) {
      return (<PostIndexItem key={post.id} post={post} />);
    });

    return (
      <div id="post-index-container">
        <ul className="post-index">
          {posts}
        </ul>
        <button className="create-button" onClick={this.createPost}>
          <img src="/assets/symbol.png"/>
        </button>

        <Modal className="modal" isOpen={this.state.showForm}>
          <PostForm callback={this.closeModal}/>
          <button className="submit-button close-button" onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }
});
