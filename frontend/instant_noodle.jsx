var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;
var Link = require('react-router').Link;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var ClientActions = require('./actions/client_actions.js'),
    PostIndex = require('./components/post_index.jsx'),
    UserDetail = require('./components/user_detail.jsx'),
    UserSearch = require('./components/search_index.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className="main-wrapper">
        <header className="header">
          <nav className="header-nav">

            <div className="header-nav-logo">
              <a href="/"><img src="/assets/logo.png"/></a>
            </div>

            <div className="header-menu-search">
              <UserSearch />
            </div>

            <div className="header-nav-menu">

              <ul className="header-nav-menu-list">
                <li className="header-list-item-user">
                  <Link to={"/users/" + currentUserId}>{window.currentUserName}</Link>
                </li>

                <li className="header-list-item-sign-out">
                  <button onClick={ClientActions.destroySession}>Sign out</button>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <ReactCSSTransitionGroup transitionName="index" transitionAppear={true} transitionAppearTimeout={500} 
                             transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <div id="main">
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex}/>
    <Route path="posts" component={PostIndex}/>
    <Route path="users/:userId" component={UserDetail}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function(){
  var root = document.getElementById("root");

  if(root){
    ReactDOM.render(
      <Router history={HashHistory}>{routes}</Router>,
      root
    );
  }
});