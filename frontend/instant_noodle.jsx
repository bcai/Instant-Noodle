var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var HashHistory = require('react-router').hashHistory;

var ClientActions = require('./actions/client_actions.js');
    PostIndex = require('./components/post_index.jsx'),
    // PostShow = require('./components/postShow.jsx'),
    PostEdit = require('./components/post_edit.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div id="main">
        <div id="nav">
          <h1>Instant Noodle</h1>
          <button onClick={ClientActions.destroySession}>Sign out</button>
        </div>
        <div id="postIndex">
          <PostIndex />
        </div>
      </div>
    );
  }
});
    
// consider adding show pages for posts
// <Route path="posts/:postId" component={PostShow} />

var routes = (
  <Route path="/" component={App}>
    <Route path="posts" component={PostIndex} />
    <Route path="posts/:postId/edit" component={PostEdit} />
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