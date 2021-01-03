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

  categories = () => {
    return this.props.categories.map((category, index) => (
      <option value={category} key={index} name={category}>
        {category}
      </option>
    ));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="query">
          <input
            type="text"
            placeholder="search a name"
            name="name"
            category="people"
          />
          <button type="submit">search</button>
        </div>

        <div className="category">
          <select name="category" id="search-category">
            {this.categories()}
          </select>
        </div>
      </form>
    );
  }
}

export default Search;
