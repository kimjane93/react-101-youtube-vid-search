import React, { Component } from 'react'
import './App.css'
import youtubeAPI from '../api/youtubeApi'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import DetailCard from './DetailCard'


class App extends Component {

    state = {
        results: [],
        selectedResult: null
    }


    onResultSelection = (result) => {
        this.setState({
            selectedResult: result
        })
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
                <DetailCard 
                    result={this.state.selectedResult}
                />
                <SearchResults
                    results={this.state.results}
                    onResultSelection={this.onResultSelection}
                />
            </div>
        )
    }
}


export default App