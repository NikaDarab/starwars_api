import "./App.css";
import Search from "./Search";
import Display from "./Display";
import { Component } from "react";
import config from "./config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  handleSearch = (query) => {
    this.setState({
      name: query,
    });
    return fetch(`${config.API_ENDPOINT}?search=${query}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  render() {
    return (
      <div className="App">
        <Search handleSearch={this.handleSearch} name={this.state.name} />
        <Display name={this.state.name} />
      </div>
    );
  }
}

export default App;
