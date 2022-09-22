import React from "react";
import HornedBeast from "./HornedBeast.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <>
        <Row>
          {this.props.data.reduce((acc, beast) => {
            if (!this.props.fuzzy && !this.props.horns) {
              acc.push(this.renderBeast(beast));
            } else if (!this.props.fuzzy && this.props.horns === beast.horns) {
              acc.push(this.renderBeast(beast));
            }
            if (
              this.props.fuzzy &&
              this.props.fuzzy.test(beast.title) &&
              this.props.horns === beast.horns
            ) {
              acc.push(this.renderBeast(beast));
            }
            if (
              this.props.fuzzy &&
              this.props.fuzzy.test(beast.title) &&
              !this.props.horns
            ) {
              acc.push(this.renderBeast(beast));
            }
            return acc;
          }, [])}
        </Row>
      </>
    );
  }
  renderBeast({ title, image_url, description, _id }) {
    return (
      <Col className="d-flex align-items-stretch">
        <HornedBeast
          title={title}
          imageUrl={image_url}
          description={description}
          key={_id}
          id={_id}
          setShowModal={this.props.setShowModal}
        />
      </Col>
    );
  }
}

export default Main;
