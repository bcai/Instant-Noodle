var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('../actions/client_actions.js');
var HashHistory = require('react-router').hashHistory;

module.exports = React.createClass({

  editPost: function (event) {
    event.preventDefault();
    var url = "/posts/" + this.props.post.id.toString() + "/edit";
    HashHistory.push(url);
  },

  render: function () {
    var post = this.props.post;

    if (post.author_id === currentUserId){
      var editButton = <button onClick={this.editPost}>Edit</button>;
    } else {
      var editButton = "";
    }

    return (
      <li>
        <h3>{post.author.username}</h3>
        <img src={post.image_url} height="300" width="300"/>
        <br/>
        {editButton}
        <p>{post.description}</p>
        <br/><br/>
      </li>
    );
  }
});
