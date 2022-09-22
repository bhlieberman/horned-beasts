import "../App.css";
import Main from "./Main.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import SelectedBeast from "./SelectedBeast.js";
import { SearchForm, Dropdown } from "./Forms.js";
import React from "react";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";

import animals from "./animals.json";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedBeast: {},
      filter: "",
    };
  }
  render() {
    return (
      <div className="App">
        <Header className="d-block mb-4" />
        <FormGroup className="d-inline-block">
          <SearchForm fuzzySearch={this.fuzzySearch} />
          <Dropdown className="p-2"/>
        </FormGroup>
        <Main
          data={animals}
          fuzzy={this.state.filter}
          setShowModal={this.showModal}
        />
        <SelectedBeast
          show={this.state.show}
          selectedBeast={this.state.selectedBeast}
          handleClose={this.showModal}
        />
        <Footer />
      </div>
    );
  }
  fuzzySearch = (chars) =>
    this.setState({
      filter: new RegExp(
        chars
          .split("")
          .map((c) => `${c}+`)
          .join(""),
        "i"
      ),
    });

  showModal = (key) => {
    this.setState((prevState) => ({
      show: !prevState.show,
      selectedBeast: animals.reduce((acc, beast) => {
        if (this.state.show) return acc;
        else if (beast._id === key) acc = { ...beast };
        return acc;
      }, {}),
    }));
  };
}

export default App;
