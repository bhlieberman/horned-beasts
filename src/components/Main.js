import React from "react";
import HornedBeast from "./HornedBeast.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <>
        <Row>
          {this.props.data.map((animal, index) => {
            return (
              <Col className="d-flex align-items-stretch">
                <HornedBeast
                  title={animal.title}
                  imageUrl={animal.image_url}
                  description={animal.description}
                  key={index}
                  select={this.props.setShowModal}
                />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default Main;
