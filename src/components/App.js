import "../App.css";
import Main from "./Main.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import SelectedBeast from "./SelectedBeast.js";
import animals from "./animals.json";
import React from "react";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedBeast: {},
      filter: "",
    };
    this.showModal = this.showModal.bind(this);
    this.showModalFalse = this.showModalFalse.bind(this);
  }
  fuzzySearch(chars) {
    let regex = new RegExp(chars, "i");
    this.setState({ filter: regex });
  }
  render() {
    return (
      <div className="App">
        <Header className="d-block mb-4" />
        <Form
          onChange={(e) => {
            e.preventDefault();
            this.fuzzySearch(e.target.value);
          }}
          onSubmit={() => this.setState({ filter: "" })}
        >
          <Form.Control type="text" placeholder="Search" />
          <Form.Text className="text-muted"></Form.Text>
        </Form>
        <Main
          data={animals.animals}
          fuzzy={this.state.filter}
          setShowModal={this.showModal}
        />
        <SelectedBeast
          show={this.state.show}
          selectedBeast={this.state.selectedBeast}
          handleClose={this.showModalFalse}
        />
        <Footer />
      </div>
    );
  }
  showModalFalse() {
    this.setState({ show: false, selectedBeast: {} });
  }
  showModal(key) {
    this.setState({
      show: true,
      selectedBeast: animals.animals.reduce((acc, beast) => {
        if (beast._id === key) acc = { ...beast };
        return acc;
      }, {}),
    });
  }
}

export default App;
