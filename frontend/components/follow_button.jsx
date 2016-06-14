var React = require('react');
var UserStore = require('../stores/user_store.js');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({

  removeFollow: function(id){
    var follow = UserStore.followId(this.props.userId, currentUserId);
    ClientActions.deleteFollow(follow);
  },

  changeFollow: function(event) {
    event.preventDefault();

    if (this.props.isFollowed){
      ClientActions.deleteFollow(UserStore.followId(this.props.userId, currentUserId));
    } else {
      var followData = {
        user_id: parseInt(this.props.userId),
        follower_id: currentUserId
      }
      ClientActions.createFollow(followData);
    }
  },

  render: function() {
    var follow = "";
    if (this.props.isFollowed){
      follow = (
        <button className="follow-button followed" onClick={this.changeFollow}>
          Following
        </button>
      );
    } else {
      follow = (
        <button className="follow-button" onClick={this.changeFollow}>
          Follow
        </button>
      );
    }

    return (
      <div id="follow-button-container">
        {follow}
      </div>
    );
  }

});