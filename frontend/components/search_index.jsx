var React = require('react');
var UserStore = require('../stores/user_store.js');
var ClientActions = require('../actions/client_actions.js');
var UserSearchItem = require('./search_index_item');

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
        <form className="search-form">
          <input type="text"
                 onChange={this.searchChange}
                 value={this.state.searchString}
                 placeholder="Search"/>
        </form> 
        <ul className={showResults}>
          {searchResults}
        </ul>
      </div>
    );
  }

});