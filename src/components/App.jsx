import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'


class App extends Component {


    render(){
        return (
            <div>
                I am the app component
                <SearchBar />
                <SearchResults />
            </div>
        )
    }
}


export default App