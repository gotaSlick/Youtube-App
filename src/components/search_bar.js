
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        //initialization of the state to a js objet with the property term (search term):
        this.state = { term: '' };
    }

    render() {
        //whenever the input changes, run the code inside of the curly brackets
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
             </div>
        );
    }
    onInputChange(term) {
        this.setState({term}); //sets state
        this.props.onSearchTermChange(term); //fires off the callback 'onSearchTermChange'
    }
}
export default SearchBar;
