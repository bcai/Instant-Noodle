var React = require('react');
var PostStore = require('../stores/post_store.js');
var UserStore = require('../stores/user_store.js');
var ClientActions = require('../actions/client_actions.js');
var PostIndex = require('./post_index.jsx');
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
    }

    return (
       <ReactCSSTransitionGroup transitionName="index" transitionAppear={true} transitionAppearTimeout={500} 
                             transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        <div className="user-detail-container">
          <div className="user-detail">
            <div><img src="/assets/cup_noodle.png"/></div>
            <div className="user-info">
              <h2>Username: {this.state.user.username}</h2>
              <p>Full Name: {this.state.user.full_name}</p>
              <p>Posts: {posts}</p>
            </div>
          </div>

          <PostIndex userDetail={true}/>
        </div>
      </ReactCSSTransitionGroup>
    );
  }

});