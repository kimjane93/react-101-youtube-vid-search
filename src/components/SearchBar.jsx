import React, { Component } from 'react'


class SearchBar extends Component {
    state = {
        query: ''
    }

    onInputChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }


    render(){
        console.log(this.state.query)
        return (
            <div>
                <form>
                    <label htmlFor="search-input">Search Video Titles</label>
                    <input id="search-input" type="text"
                    onChange={this.onInputChange}
                    value={this.state.query}
                    />
                </form>
            </div>
        )
    }
}


export default SearchBar