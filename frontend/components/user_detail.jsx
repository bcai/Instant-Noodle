var React = require('react');
var PostStore = require('../stores/post_store.js');
var UserStore = require('../stores/user_store.js');
var ClientActions = require('../actions/client_actions.js');
var PostIndex = require('./post_index.jsx');
var FollowButton = require('./follow_button');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

module.exports = React.createClass({

  getInitialState: function () {
    return { user: {}};
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.getUserFromStore);
    ClientActions.fetchUser(this.props.params.userId);
  },

  componentWillReceiveProps: function(nextProps) {
    ClientActions.fetchUser(nextProps.params.userId);
  },

  componentWillUnmount: function() {
    this.userListener.remove();
  },

  getUserFromStore: function() {
    this.setState({ user: UserStore.user() });

  },

  render: function() {
    if(this.state.user.posts) {
      var posts = this.state.user.posts.length;
      var followers = this.state.user.followers.length;
      var followings = this.state.user.followings.length;
    }

    return (
       <ReactCSSTransitionGroup transitionName="index" transitionAppear={true} transitionAppearTimeout={500} 
                             transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        <div className="user-detail-container">
          <div className="user-detail">
            <div className="user-image"><img src="/assets/cup_noodle.png"/></div>
            <div className="user-info">
              <div id="user-info-header">
                <h2>{this.state.user.username}</h2>
                <FollowButton userId={this.state.user.id} isFollowed={UserStore.isFollowed(this.state.user.id, currentUserId)}/>
              </div>
              <h3>{this.state.user.full_name}</h3>
              <div id="user-info-stats">
                <p>Posts: <span>{posts}</span></p>
                <p>Followers: <span>{followers}</span></p>
                <p>Following: <span>{followings}</span></p>
              </div>
            </div>
          </div>

          <PostIndex userDetail={true}/>
        </div>
      </ReactCSSTransitionGroup>
    );
  }

});