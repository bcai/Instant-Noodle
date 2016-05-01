var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('../actions/client_actions.js');
var PostEdit = require('./post_edit');
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
      if (age.indexOf(" hours") !== -1){
        age = age.replace(" hours", "h");
      } else if (age.indexOf(" day") !== -1){
        age = age.replace(" day", "d");
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
        <p>
          <span><a href="#">{post.author.username}</a></span>  
          {post.description}
        </p>
        <br/><br/>

        <Modal className="modal" isOpen={this.state.showForm}>
          <PostEdit postId={post.id} callback={this.closeModal}/>
          <button className="submit-button close-button" onClick={this.closeModal}>Close</button>
        </Modal>
      </li>
    );
  }
});
