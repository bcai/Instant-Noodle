var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

  render: function() {
    var user = this.props.userResult;

    return (
      <li className="user-search-item">
        <Link to={"/users/" + user.id}>
          <h3>{user.username}</h3>
          <p>{user.full_name}</p>
        </Link>
      </li>
    );
  }

});

