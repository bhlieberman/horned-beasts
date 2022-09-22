import React from "react";
import HornedBeast from "./HornedBeast.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    console.log(this.props.fuzzy);
    return (
      <>
        <Row>
          {this.props.data.filter((animal, index) => {
            return this.props.fuzzy !== '' ? this.props.fuzzy.test(animal.title) : animal;
          }).map((animal, index) => {
            return (<Col className="d-flex align-items-stretch">
                <HornedBeast
                  title={animal.title}
                  imageUrl={animal.image_url}
                  description={animal.description}
                  key={index}
                  id={animal._id}
                  setShowModal={this.props.setShowModal}
                />
              </Col>)
          })}
        </Row>
      </>
    );
  }
  componentDidUpdate(prevProps) {
    console.log(this.props.fuzzy !== prevProps.fuzzy);
  }
}

export default Main;
