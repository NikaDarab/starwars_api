import "./App.css";
import Search from "./Search";
import Display from "./Display";
import { Component } from "react";
import config from "./config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      names: [],
      categories: [
        "planets",
        "starships",
        "vehicles",
        "people",
        "films",
        "species",
      ],
    };
  }
  handleSearch = (category, query) => {
    this.setState({
      query: query,
    });
    return fetch(`${config.API_ENDPOINT}/${category}?search=${query}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("something went wrong!try again later.");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const results = data.results.map((result) => (
          <ul key={result.created}>{result.name}</ul>
        ));
        this.setState({
          names: results,
        });
      })
      .catch((e) => e.message);
  };

  render() {
    return (
      <div className="App">
        <Search
          handleSearch={this.handleSearch}
          name={this.state.query}
          categories={this.state.categories}
        />
        <Display name={this.state.query} names={this.state.names} />
      </div>
    );
  }
}

export default App;
