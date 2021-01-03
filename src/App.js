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
    };
  }
  handleSearch = (query) => {
    this.setState({
      query: query,
    });
    return fetch(`${config.API_ENDPOINT}?search=${query}`)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((result) => result.name);
        console.log(results);
        this.setState({
          names: results,
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Search handleSearch={this.handleSearch} name={this.state.query} />
        <Display name={this.state.query} names={this.state.names} />
      </div>
    );
  }
}

export default App;
