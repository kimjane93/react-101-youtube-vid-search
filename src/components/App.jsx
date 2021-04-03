import React, { Component } from 'react'
import youtubeAPI from '../api/youtubeApi'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'


class App extends Component {

    state = {
        results: []
    }


    onSearchSubmit = async (query) => {
        const results = await youtubeAPI.get('/search', {
            params: { q: query }
        })
        this.setState({
            results: results.data.items
        })
    }

    render(){
        return (
            <div className="ui container" >
                <h1>Search The Youtube API!</h1>
                <SearchBar
                    onSearchSubmit={this.onSearchSubmit}
                />
                <SearchResults
                    results={this.state.results}
                />
            </div>
        )
    }
}


export default App