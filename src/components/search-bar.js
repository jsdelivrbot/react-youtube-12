// ES6 Import React and pull or method 'Component' and assign it as variable 'Component'; Same as if doing:
// import React from 'react'
// const Component = React.Component
import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      term: ''
    }
  }

  render(){
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
