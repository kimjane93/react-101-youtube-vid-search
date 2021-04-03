import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    query: "",
  };

  onInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.query);
  };

  render() {
    console.log(this.state.query);
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search-input">Search Video Titles</label>
            <input
              id="search-input"
              type="text"
              onChange={this.onInputChange}
              value={this.state.query}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
