var React = require('react');
var UserStore = require('../stores/user_store.js');
var ClientActions = require('../actions/client_actions.js');
var UserSearchItem = require('./search_index_item');
var HashHistory = require('react-router').hashHistory;

module.exports = React.createClass({

  getInitialState: function() {
    return {searchString: "", searchResults: []};
  },

  componentDidMount: function() {
    ClientActions.fetchAllUsers();
  },

  searchChange: function(event) {
    var newSearch = event.target.value;
    this.setState({searchString: newSearch,
                   searchResults: UserStore.search(newSearch)});
  },

  resetIndex: function(event) {
    this.setState({searchString: "", searchResults: []});
  },

  navigateOnEnter: function (event) {
    event.preventDefault();
    
    var firstResult = this.state.searchResults[0].id;
    HashHistory.push("/users/" + firstResult);
    this.setState({searchString: "", searchResults: []});
  },

  render: function() {
    var searchResults = this.state.searchResults.map(function(result){
      return (<UserSearchItem key={result.id} userResult={result}/>);
    });

    var showResults="user-search-index";
    if(searchResults.length > 0){
      showResults = "user-search-index show-results";
    }

    return (
      <div className="user-search">
        <form className="search-form" onSubmit={this.navigateOnEnter}>
          <input type="text"
                 onChange={this.searchChange}
                 value={this.state.searchString}
                 placeholder="Search"/>
        </form> 
        <ul className={showResults} onClick={this.resetIndex}>
          {searchResults}
        </ul>
      </div>
    );
  }

});