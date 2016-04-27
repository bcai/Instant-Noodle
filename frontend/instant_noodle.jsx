import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

var React = require('react'),
    ReactDOM = require('react-dom'),
    PostIndex = require('./components/postIndex.jsx'),
    PostShow = require('./components/postShow.jsx'),
    PostEdit = require('./components/postEdit.jsx');

var App = React.createClass9({
  render: function () {
    return (
      <div>
        <h2>Post Index</h2>
        {this.props.children}
      </div>
    )
  }
});

var routes = (
  <Route path="/" component={App}>
    <Route path="posts" component={PostIndex} />
    <Route path="posts/:postId" component={PostShow} />
    <Route path="posts/:postId/edit" component={PostEdit} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function(){
  var root = document.getElementById("root");
  ReactDOM.render(
    <Router hashHistory={hashHistory} routes={routes} />,
    root
  );
});