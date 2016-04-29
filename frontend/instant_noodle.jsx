var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;

var ClientActions = require('./actions/client_actions.js'),
    PostIndex = require('./components/post_index.jsx'),
    // PostShow = require('./components/postShow.jsx'),
    PostEdit = require('./components/post_edit.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className="main-wrapper">
        <header className="header">
          <nav className="header-nav group">

            <div className="header-nav-logo group">
              <a href="/"><img src="/assets/logo.png"/></a>
            </div>

            <div className="header-nav-menu group">
              <div className="header-menu-search">

              </div>

              <ul className="header-nav-menu-list">
                <li className="header-list-item-user">
                  <a href="#">{window.currentUserName}</a>
                </li>

                <li className="header-list-item-sign-out">
                  <button onClick={ClientActions.destroySession}>Sign out</button>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div id="main">
          {this.props.children}
        </div>
      </div>
    );
  }
});
    
// consider adding show pages for posts
// <Route path="posts/:postId" component={PostShow} />

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex}/>
    <Route path="posts" component={PostIndex}/>
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