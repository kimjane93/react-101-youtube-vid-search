import React, { Component } from "react";
import "./App.css";
import youtubeAPI from "../api/youtubeApi";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import DetailCard from "./DetailCard";

class App extends Component {
  state = {
    results: [],
    selectedResult: null,
  };


  componentDidMount(){
      this.onSearchSubmit('coding 101')
  }

  onResultSelection = (result) => {
    this.setState({
      selectedResult: result,
    });
  };

  onSearchSubmit = async (query) => {
    const results = await youtubeAPI.get("/search", {
      params: { q: query },
    });
    this.setState({
      results: results.data.items,
      selectedResult: results.data.items[0]
    });
  };

  render() {
    return (
      <div className="ui container">
        <h1>Search The Youtube API!</h1>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
              <div className="eleven wide column">
            <DetailCard result={this.state.selectedResult} />
            </div>
            <div className="five wide column">
            <SearchResults
              results={this.state.results}
              onResultSelection={this.onResultSelection}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
