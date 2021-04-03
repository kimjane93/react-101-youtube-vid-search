import React from 'react'

const SearchResult = ({ result }) => {
    return (
        <div>{result.snippet.title}</div>
    )
}


export default SearchResult