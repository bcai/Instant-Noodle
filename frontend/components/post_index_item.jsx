var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('../actions/client_actions.js');
var HashHistory = require('react-router').hashHistory;
var PostEdit = require('./post_edit');
var Modal = require('react-modal');

module.exports = React.createClass({
  getInitialState: function(){
    return {showForm: false};
  },

  componentWillMount: function(){
    Modal.setAppElement("body");
  },

  editPost: function (event) {
    event.preventDefault();
    this.setState({showForm: true});
  },

  closeModal: function() {
    this.setState({showForm: false});
  },

  render: function () {
    var post = this.props.post;

    var editable = "post";

    if (post.author.id === currentUserId){
      editable = "post editable"
      var editButton = <button className="submit-button editable" onClick={this.editPost}></button>;
    } else {
      var editButton = "";
    }
    return (
      <li className={editable}>
        <div className="post-header group">
          <div>{post.author.username}</div>
          {editButton}
        </div>
        <img src={post.image_url}/>
        <br/>
        <p><span>{post.author.username}</span>  {post.description}</p>
        <br/><br/>

        <Modal className="modal" isOpen={this.state.showForm}>
          <PostEdit postId={post.id} callback={this.closeModal}/>
          <button className="submit-button close-button" onClick={this.closeModal}>Close</button>
        </Modal>
      </li>
    );
  }
});
