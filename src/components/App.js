import "../App.css";
import Main from "./Main.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import SelectedBeast from "./SelectedBeast.js";
import animals from "./animals.json";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedBeast: {},
    };
    this.showModal = this.showModal.bind(this);
    this.showModalFalse = this.showModalFalse.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Main data={animals.animals} setShowModal={this.showModal} />
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
