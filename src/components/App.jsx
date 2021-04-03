import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'


class App extends Component {


    render(){
        return (
            <div>
                <h1>Search The Youtube API!</h1>
                <SearchBar />
                <SearchResults />
            </div>
        )
    }
}


export default App