import React from 'react';
import SearchField from 'react-search-field';

class SearchBar extends React.Component {
    
    render() {
        return (
        <div>
        <SearchField
        placeholder="Search store..."
        />
        </div>
        )
    }
}

export default SearchBar;