// the input at the top of the page to look for videos
// when the user types input, we need to make the api request to the youtube api.
// {Component} here is exactly like: const Component = React.Component; Just making the code
// cleaner, so that I dont have to write React.Component later, but just Component
import React, { Component } from 'react';

// all the class components must have their render method that returns some JSX
class SearchBar extends Component {
    constructor(props) {
        super(props);
        //initialization of the state to a js objet with the property term (search term):
        this.state = { term: '' };
    }

    render() {
        //whenever the input changes, run the code inside of the curly brackets
        // we update the state with this.setState and pass it the object with it's property 
        // and set the value that we want it to have now: event.target.value.
        // whenever the input changes, it causes the state to be updated
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