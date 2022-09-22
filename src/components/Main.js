import React from "react";
import HornedBeast from "./HornedBeast.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <>
        <Row>
          {this.props.data.reduce((acc, beast, index) => {
            if (!this.props.fuzzy) {
              acc.push(<Col className="d-flex align-items-stretch">
                  <HornedBeast
                    title={beast.title}
                    imageUrl={beast.image_url}
                    description={beast.description}
                    key={index}
                    id={beast._id}
                    setShowModal={this.props.setShowModal}
                  />
                </Col>);
            } else if (this.props.fuzzy && this.props.fuzzy.test(beast.title)) {
              acc.push(<Col className="d-flex align-items-stretch">
                  <HornedBeast
                    title={beast.title}
                    imageUrl={beast.image_url}
                    description={beast.description}
                    key={index}
                    id={beast._id}
                    setShowModal={this.props.setShowModal}
                  />
                </Col>)
            }
            return acc;
          }, [])}
        </Row>
      </>
    );
  }
}

export default Main;

