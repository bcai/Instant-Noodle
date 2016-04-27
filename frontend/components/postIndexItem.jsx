var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('../actions/clientActions.js');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({

  editPost: function (event) {
    event.preventDefault();
    var url = "/posts/" + this.props.post.id.toString() + "/edit";
    hashHistory.push(url);
  },

  deletePost: function (event) {
    event.preventDefault();
    ClientActions.deletePost(this.props.post.id);
  },

  render: function () {
    var post = this.props.post;

    if (post.author_id === current_user.id){
      editButton = <button onClick={this.editPost}>Edit</button>;
    } else {
      editButton = "";
    }

    return (
      <li>
        <Link to={"/posts/" + this.props.post.id.toString()}>{post.title}</Link>&nbsp;
        {editButton}&nbsp;
      </li>
    );
  }
});
