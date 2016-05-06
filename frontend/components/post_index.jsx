var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');

var PostIndexItem = require('./post_index_item.jsx');
var PostForm = require('./post_form.jsx');
var Modal = require('react-modal');

module.exports = React.createClass({

  getInitialState: function () {
    return {indexCount: 5, showForm: false };
  },

  componentWillMount: function(){
    Modal.setAppElement("body");
  },

  componentDidMount: function () {
    this.postListener = PostStore.addListener(this.onStoreUpdate);

    if(!this.props.userDetail){
      ClientActions.fetchAllPosts();
    }

    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function () {
    this.postListener.remove();
    window.removeEventListener('scroll', this.handleScroll);
  },

  onStoreUpdate: function() {
    this.forceUpdate();
  },

  percentScroll: function(){
    var html = document.documentElement;
    var body = document.body;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                         html.clientHeight, html.scrollHeight, html.offsetHeight );

    var percentage = window.scrollY / (height - window.innerHeight);
    return percentage;
  },

  handleScroll: function(event) {
    if (this.percentScroll() === 1){
      this.setState({ indexCount: this.state.indexCount + 2});
    }
  },

  openCreateModal: function (event) {
    this.setState({showForm: true});
  },

  closeModal: function() {
    this.setState({showForm: false});
  },

  render: function () {
    var posts =  PostStore.getPosts(this.state.indexCount).map(function (post) {
      return (<PostIndexItem key={post.id} post={post}/>);
    });

    return (
      <div id="post-index-container">
        <ul className="post-index">
          {posts}
        </ul>
        <button className="create-button" onClick={this.openCreateModal}>
          <img src="/assets/symbol.png"/>
        </button>

        <Modal className="modal" onRequestClose={this.closeModal} isOpen={this.state.showForm}>
          <PostForm callback={this.closeModal}/>
          <button className="submit-button close-button" onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }
});
