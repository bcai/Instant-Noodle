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
    var followText = "Follow";
    if (this.props.isFollowed){
      followText = "Following";
    }
    return (
      <div>
        <button className="follow-button" onClick={this.changeFollow}>
          {followText}
        </button>
      </div>
    );
  }

});