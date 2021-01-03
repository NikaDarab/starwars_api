import React, { Component } from "react";

class Search extends Component {
  //handling search!
  handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.name.value;
    e.target.name.value = "";
    console.log(`name is ${query}`);
    query.length === 0
      ? alert("search cannot be empty")
      : this.props.handleSearch(query);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="search a name" name="name" />
        <button type="submit">search</button>
      </form>
    );
  }
}

export default Search;
