import React, { Component } from "react";

class Search extends Component {
  handleSearch = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(`name is ${name}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <input type="text" placeholder="search a name" name="name" />
        <button type="submit">search</button>
      </form>
    );
  }
}

export default Search;
