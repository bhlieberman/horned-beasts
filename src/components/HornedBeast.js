import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: "",
    };
  }
  render() {
    return (
      <Card bg="light" text="dark" style={{ width: "18rem" }} className="container mx-auto my-5">
        <Card.Img src={this.props.imageUrl}></Card.Img>
        <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <Button
          onClick={() =>
            this.setState((prevState) => ({
              likes: prevState.likes.concat("❤️"),
            }))
          }
        >
          Click to like
        </Button>
        <Card.Text>{this.state.likes}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
