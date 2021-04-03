import React from 'react'
import './SearchResult.css'

const SearchResult = ({ result, onResultSelection }) => {
    return (
        <div onClick={() => onResultSelection(result)} className="search-result item">
            <img className="ui image" src={result.snippet.thumbnails.medium.url} alt={result.snippet.title} />
            <div className="content">
                <div className="header">{result.snippet.title}</div>
            </div>
        </div>
    )
}


export default SearchResult