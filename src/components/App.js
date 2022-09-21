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
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Main
          data={animals.animals}
          setShowModal={this.showModal}
        />
        <SelectedBeast show={this.state.show} title="a horned beast" description="about it" />
        <Footer />
      </div>
    );
  }
  showModal() {
    this.setState((prevState) => ({ show: !prevState.show }));
  }
}

export default App;
