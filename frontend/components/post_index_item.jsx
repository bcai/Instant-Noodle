var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('../actions/client_actions.js');
var PostEdit = require('./post_edit');
var CommentIndex = require('./comment_index');
var CommentForm = require('./comment_form');
var LikeCounter = require('./like_counter');
var LikeButton = require('./like_button');
var Modal = require('react-modal');

module.exports = React.createClass({
  getInitialState: function(){
    return {showForm: false};
  },

  componentWillMount: function(){
    Modal.setAppElement("body");
  },

  openEditModal: function (event) {
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
      var editButton = <button className="submit-button editable" onClick={this.openEditModal}></button>;
    } else {
      var editButton = "";
    }

    if (post.age){
      var age = post.age.replace("about", "");

      if (age.indexOf("less than a minute") !== -1){
      } else if (age.indexOf(" hours") !== -1){
        age = age.replace(" hours", "h");
      } else if (age.indexOf(" hour") !== -1){
        age = age.replace(" hour", "h");
      } else if (age.indexOf(" day") !== -1){
        age = age.replace(" day", "d");
      } else if (age.indexOf(" minutes") !== -1){
        age = age.replace(" minutes", "m");
      } else if (age.indexOf(" minute") !== -1){ 
        age = age.replace(" minute", "m");
      } else if (age.indexOf(" weeks") !== -1){
        age = age.replace(" weeks", "w");
      } else if (age.indexOf(" week") !== -1){
        age = age.replace(" week", "w");
      }
    }


    return (
      <li className={editable}>
        <div className="post-header group">
          <div id="post-author"><a href="#">{post.author.username}</a></div>
          <ul>
            <div id="post-age">{age}</div>
            {editButton}
          </ul>
        </div>
        <img src={post.image_url}/>
        <br/>

        <LikeCounter postId={post.id}/>

        <p>
          <span><a href="#">{post.author.username}</a></span>  
          {post.description}
        </p>
        <div className="comment-section group">
          <CommentIndex postId={post.id}/>
          <hr/>
          <ul className="post-bottom">
            <li><LikeButton postId={post.id}/></li>
            <li><CommentForm postId={post.id}/></li>
          </ul>
        </div>


        <Modal className="modal" onRequestClose={this.closeModal} isOpen={this.state.showForm}>
          <PostEdit postId={post.id} callback={this.closeModal}/>
          <button className="submit-button close-button" onClick={this.closeModal}>Close</button>
        </Modal>
      </li>
    );
  }
});
