import React from 'react'
import SearchResult from './SearchResult'


const SearchResults = ({ results, onResultSelection }) => {

        return (
            <div className="ui relaxed divided list" >
                {results.map((result)=> (
                    <SearchResult 
                    result={result}
                    onResultSelection={onResultSelection}
                    />
                ))}
            </div>
        )
}


export default SearchResults